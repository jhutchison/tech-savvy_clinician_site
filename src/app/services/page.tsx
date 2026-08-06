import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  companyName,
  servicesOfferings,
  servicesPageIntro,
  servicesPageSubtitle,
} from "@/lib/strings/strings";

export const metadata: Metadata = {
  title: `Services | ${companyName}`,
  description: servicesPageIntro,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8 border border-gray-500"
          aria-label="Services header"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Services</h1>
            <p className="text-lg md:text-xl text-white/90">{servicesPageSubtitle}</p>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Services content">
          <div className="max-w-3xl mx-auto space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed">{servicesPageIntro}</p>

            <ul className="space-y-6">
              {servicesOfferings.map((service) => (
                <li
                  key={service.title}
                  className="rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                  <p className="mt-2 text-gray-700 leading-relaxed">{service.body}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="bg-linear-to-r from-purple-600 to-gray-600 text-white px-5 py-3 rounded-md border-2 border-transparent hover:border-green-400 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/survey"
                className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Take our survey
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
