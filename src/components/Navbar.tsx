import Image from "next/image";
import Link from "next/link";
import { companyName } from "@/lib/strings/strings";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between align-center h-16">
          <div className="flex-shrink-0 flex items-center align-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt=""
                width={1254}
                height={1254}
                priority
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-gray-800">{companyName}</span>
            </Link>
          </div>
          <div className="flex items-center align-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-medium font-medium"
            >
              Home
            </Link>
            {/* <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-medium font-medium"
            >
              Services
            </Link> */}
             <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-medium font-medium"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-medium font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
