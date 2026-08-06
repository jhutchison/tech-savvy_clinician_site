import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PersonInfoCard from "@/components/PersonInfoCard";
import {
  aboutPageMission,
  aboutPageSubtitle,
  aboutPageTeam,
  aboutPageValues,
  aboutUsText,
  companyName,
} from "@/lib/strings/strings";

export const metadata: Metadata = {
  title: `About Us | ${companyName}`,
  description: aboutUsText,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="my-8 bg-linear-to-r from-gray-600 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8 border border-gray-500"
          aria-label="About Us header"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
            <p className="text-lg md:text-xl text-white/90">{aboutPageSubtitle}</p>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white" aria-label="About Us content">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{aboutUsText}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{aboutPageMission}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Our team</h2>
              <div className="space-y-4">
                {aboutPageTeam.map((person) => (
                  <PersonInfoCard
                    key={person.name}
                    name={person.name}
                    bio={person.bio}
                    imageSrc={person.imageSrc}
                    imageAlt={person.imageAlt}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">What guides us</h2>
              <ul className="space-y-6">
                {aboutPageValues.map((value) => (
                  <li key={value.title}>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{value.body}</p>
                  </li>
                ))}
              </ul>
            </div>

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
