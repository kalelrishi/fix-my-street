export default function HomePage() {
  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-black">
          Fix My Street
        </h1>

        <p className="mt-6 text-xl text-gray-800">
          A simple platform for citizens to report public issues
          like potholes, garbage, and streetlight problems.
        </p>

        <p className="mt-2 text-lg text-gray-700">
          Help your municipality respond faster and keep your
          locality clean and safe.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/report"
            className="rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-black hover:bg-yellow-600 transition"
          >
            Report an Issue
          </a>

          <a
            href="/issues"
            className="rounded-full border-2 border-yellow-500 px-10 py-4 text-lg font-bold text-black hover:bg-yellow-100 transition"
          >
            View Public Issues
          </a>
        </div>
      </div>
    </main>
  );
}
