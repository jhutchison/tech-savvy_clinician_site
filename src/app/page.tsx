import Navbar from "@/components/Navbar";
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`my-8 
        bg-linear-to-r from-gray-600 to-purple-600
          text-white 
          py-10 px-4 sm:px-6 lg:px-8 
          border border-gray-500`}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {companyName}
            </h1>
            <p className=" text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {tagline}
            </p>
            <p className=" text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {aboutUsText}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <Link
              id="contact-us"
              href="/contact"
              className="bg-linear-to-r from-purple-600 to-gray-600
          text-white p-6 rounded-lg border-4 hover:border-green-400 block text-center max-w-xl mx-auto"
            >
              <span className="text-xl font-semibold mb-2">Contact Us!</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
