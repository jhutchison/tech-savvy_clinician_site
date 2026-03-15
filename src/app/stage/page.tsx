import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { companyName, tagline, aboutUsText } from "@/lib/strings/strings";
import { primaryColor } from "@/lib/other_constants/colors";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`my-8 
        rounded-full 
        bg-linear-to-r from-gray-200 to-purple-600
          text-white 
          py-20 px-4 sm:px-6 lg:px-8 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <Link
                id="fill-out-survey"
                href="/survey"
                className="bg-sky-500/80 p-6 rounded-lg border text-white block text-center"
              >
                <span className="text-xl font-semibold mb-2">Fill out our 2 Minute Survey!</span>
              </Link>

              {/* Feature 2 */}
              <button id="join-mailing-list" className="bg-sky-500/80 text-white p-6 rounded-lg border border-blue-500">
              
                <span className="text-xl font-semibold mb-2">Join our Mailing List!</span>
              </button>

              {/* Feature 3 */}
              {/* <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resources</h3>
                <p className="text-gray-600">Access downloadable apps, guides, and surveys to enhance your practice.</p>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
