"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactPage() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const companyId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const isSending = submitState.status === "sending";

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && message.trim().length > 0 && !isSending;
  }, [email, message, isSending]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState({ status: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
          message: message.trim(),
          honeypot: company.trim() || undefined,
        }),
      });

      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        const errorMessage =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error?: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Something went wrong sending your message. Please try again.";
        setSubmitState({ status: "error", message: errorMessage });
        return;
      }

      setSubmitState({ status: "success" });
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setSubmitState({
        status: "error",
        message: "Network error sending your message. Please try again.",
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8 border border-gray-500"
          aria-label="Contact header"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact</h1>
            <p className="text-lg md:text-xl text-white/90">
              Tell us what you’re trying to accomplish and we’ll get back to you.
            </p>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Contact form">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8">
              {submitState.status === "success" ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Message sent</h2>
                  <p className="text-gray-700">
                    Thanks—your message is on its way. We’ll respond as soon as we can.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="bg-linear-to-r from-purple-600 to-gray-600 text-white px-5 py-2 rounded-md hover:opacity-95 transition-opacity"
                      onClick={() => setSubmitState({ status: "idle" })}
                    >
                      Send another message
                    </button>
                    <Link
                      href="/"
                      className="px-5 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      Back to home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor={nameId} className="block text-sm font-medium text-gray-900">
                      Name <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      id={nameId}
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      maxLength={120}
                      disabled={isSending}
                    />
                  </div>

                  <div>
                    <label htmlFor={emailId} className="block text-sm font-medium text-gray-900">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id={emailId}
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="email"
                      inputMode="email"
                      required
                      maxLength={254}
                      disabled={isSending}
                    />
                  </div>

                  <div>
                    <label htmlFor={messageId} className="block text-sm font-medium text-gray-900">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={7}
                      required
                      maxLength={4000}
                      disabled={isSending}
                    />
                  </div>

                  {/* Honeypot (anti-spam): humans won't fill this */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor={companyId}>Company</label>
                    <input
                      id={companyId}
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {submitState.status === "error" && (
                    <p className="text-sm text-red-700" role="alert">
                      {submitState.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-linear-to-r from-purple-600 to-gray-600 text-white px-5 py-3 rounded-md border-2 border-transparent enabled:hover:border-green-400 disabled:opacity-60 transition-colors"
                  >
                    {isSending ? "Sending…" : "Send message"}
                  </button>

                  <p className="text-sm text-gray-600">
                    Prefer email? You can still reach us via the form here (it sends server-side).
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

