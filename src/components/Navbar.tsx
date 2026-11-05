import Image from "next/image";
import Link from "next/link";
import SkipLink from "@/components/SkipLink";
import { companyName } from "@/lib/strings/strings";

const navLinkClassName =
  "text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-medium font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary--color)] focus-visible:ring-offset-2";

export default function Navbar() {
  return (
    <>
      <SkipLink />
      <nav className="bg-white shadow-md" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between align-center h-16">
            <div className="flex-shrink-0 flex items-center align-center">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary--color)] focus-visible:ring-offset-2"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={1254}
                  height={1254}
                  priority
                  className="h-12 w-12"
                />
                <span className="text-xl font-bold text-gray-800">
                  {companyName}
                </span>
              </Link>
            </div>
            <div className="flex items-center align-center">
              <Link href="/" className={navLinkClassName}>
                Home
              </Link>
              <Link href="/about" className={navLinkClassName}>
                About Us
              </Link>
              <Link href="/blog" className={navLinkClassName}>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
