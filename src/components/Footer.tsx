import { companyName } from "@/lib/strings/strings";
import Link from "next/link";

const footerLinkClassName =
  "text-white/90 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary--color)] rounded-sm";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary--color)] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">{companyName}</h2>
            <p className="text-white/90">
              Helping clinicians leverage technology for better patient outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={footerLinkClassName}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className={footerLinkClassName}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClassName}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <p className="text-white/90 mb-4">
              Join our mailing list for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary--color)]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-white text-[var(--primary--color)] px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary--color)]"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/30 text-center text-white/90">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
