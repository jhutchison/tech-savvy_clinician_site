import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SurveyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">2 Minute Survey</h1>
          <p className="text-gray-600 mb-8">
            Survey content goes here.
          </p>
          <Link
            href="/stage"
            className="text-sky-600 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
