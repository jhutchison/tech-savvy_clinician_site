type PersonInfoCardProps = {
  name: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
};

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function PersonInfoCard({
  name,
  bio,
  imageSrc,
  imageAlt,
}: PersonInfoCardProps) {
  const initials = initialsFromName(name);

  return (
    <article className="rounded-lg border border-gray-200 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element -- optional local/remote headshots without next/image config
          <img
            src={imageSrc}
            alt={imageAlt ?? `Portrait of ${name}`}
            className="h-24 w-24 shrink-0 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div
            className="h-24 w-24 shrink-0 rounded-full bg-linear-to-br from-gray-600 to-purple-600 text-white flex items-center justify-center text-2xl font-semibold"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}

        <div className="min-w-0 space-y-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </article>
  );
}
