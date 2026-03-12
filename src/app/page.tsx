import { tagline, companyName } from "@/lib/strings/strings";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {companyName}
        </h1>
        <br />
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          {tagline}.
          <br />
          <br />
           Our New site is coming soon.
        </p>
      </div>
    </div>
  );
}
