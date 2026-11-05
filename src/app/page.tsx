import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  companyName,
  tagline,
  aboutUsText,
} from "@/lib/strings/strings";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-grow" tabIndex={-1}>
        {/* Hero Section */}
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-[var(--primary--color)] text-white py-12 px-4 sm:px-6 lg:px-8 border border-gray-500"
        >
          <div className="max-w-7xl mx-auto text-center">
            <Image
              src="/logo.png"
              alt=""
              width={1254}
              height={1254}
              priority
              className="mx-auto mb-8 h-auto w-56 sm:w-72 md:w-96"
            />
            <h1 className="sr-only">{companyName}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {tagline}
            </p>
            {/* <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {aboutUsText}
            </p> */}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p
              id="upcoming-event"
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-800"
            >
              Upcoming event: Join us for a virtual workshop presented by Core
              Learning on December 17th 2026. Learn more about the{" "}
              <Link
                href="https://corelearninginc.com/all-workshops-%26-register/ola/services/cheap-and-easy-ways-to-make-sure-you-are-keeping-your-clients-data-safe-and-hipaa-compliant"
                className="underline text-[var(--primary--color)] hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary--color)] focus-visible:ring-offset-2 rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                workshop about using technology to improve data security and HIPAA compliance
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
              .
            </p>
            <Link
              id="contact-us"
              href="/contact"
              className="bg-linear-to-r from-[var(--primary--color)] to-gray-600
          text-white p-6 rounded-lg border-4 border-transparent hover:border-blue-400 block text-center max-w-sm mx-auto mt-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary--color)] focus-visible:ring-offset-2"
            >
              <span className="text-xl font-semibold mb-2">Contact Us!</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
