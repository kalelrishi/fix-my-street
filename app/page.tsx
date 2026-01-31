export default function HomePage() {
  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Headline */}
        <h1 className="text-5xl font-bold leading-tight text-black">
          Report civic issues <br />
          with clarity and proof.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-lg text-gray-800">
          Fix My Street enables citizens to report potholes, garbage,
          and public hazards using photos and live location so
          municipalities can respond faster and transparently.
        </p>

        {/* Actions */}
        <div className="mt-10 flex gap-4">
          <a
            href="/report"
            className="rounded-xl bg-black px-8 py-4 text-base font-semibold text-white hover:bg-gray-900 transition"
          >
            Report an Issue
          </a>

          <a
            href="/issues"
            className="rounded-xl border-2 border-black/10 bg-white px-8 py-4 text-base font-semibold text-black hover:bg-yellow-100 transition"
          >
            View Public Issues
          </a>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-yellow-200 pt-10">
          <p className="text-sm text-gray-700">
            Designed for accountability, transparency, and faster
            municipal action.
          </p>
        </div>
      </div>
    </main>
  );
}
