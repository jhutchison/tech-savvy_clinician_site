export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-0 z-50 -translate-y-full rounded-md bg-white px-4 py-2 text-[var(--primary--color)] shadow-lg outline-none ring-2 ring-[var(--primary--color)] transition-transform focus:translate-y-4"
    >
      Skip to main content
    </a>
  );
}
