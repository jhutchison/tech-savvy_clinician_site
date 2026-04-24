import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function toOptionalTrimmedString(v: unknown, maxLen: number): string | undefined {
  if (typeof v !== "string") return undefined;
  const trimmed = v.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseToRecipients(raw: string): { ok: true; recipients: string[] } | { ok: false; error: string } {
  const pieces = raw
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean);

  if (pieces.length === 0) {
    return { ok: false, error: "CONTACT_TO_EMAIL must contain at least one email address." };
  }

  const invalid = pieces.filter((p) => !isValidEmail(p));
  if (invalid.length > 0) {
    return { ok: false, error: "CONTACT_TO_EMAIL contains an invalid email address." };
  }

  return { ok: true, recipients: pieces };
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const honeypot = toOptionalTrimmedString(body.honeypot, 200);
  if (honeypot) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const name = toOptionalTrimmedString(body.name, 120);
  const email = toOptionalTrimmedString(body.email, 254);
  const message = toOptionalTrimmedString(body.message, 4000);

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 });
  }
  if (!isNonEmptyString(message)) {
    return NextResponse.json({ ok: false, error: "Please enter a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toRaw = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Server is not configured to send email yet." },
      { status: 500 },
    );
  }
  if (!toRaw || !from) {
    return NextResponse.json(
      { ok: false, error: "Server is missing email routing configuration." },
      { status: 500 },
    );
  }

  const toParsed = parseToRecipients(toRaw);
  if (!toParsed.ok) {
    return NextResponse.json(
      { ok: false, error: "Server is missing email routing configuration." },
      { status: 500 },
    );
  }

  const subject = `The Tech-Savvy Clinician Request${name ? ` from ${name}` : ""}`;

  const safeName = name ? escapeHtml(name) : "";
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
      <h2 style="margin: 0 0 12px 0;">New contact request</h2>
      <p style="margin: 0 0 8px 0;"><strong>From:</strong> ${safeName ? `${safeName} &lt;${safeEmail}&gt;` : safeEmail}</p>
      <p style="margin: 0 0 12px 0;"><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; word-wrap: break-word; background: #f6f7f9; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;">${safeMessage}</pre>
    </div>
  `.trim();

  const text = `New contact request
From: ${name ? `${name} <${email}>` : email}

Message:
${message}
`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      to: toParsed.recipients,
      from,
      subject,
      reply_to: email,
      text,
      html,
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text().catch(() => "");
    return NextResponse.json(
      { ok: false, error: "Email send failed.", details: errText || undefined },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

