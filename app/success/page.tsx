export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-yellow-50 flex items-center justify-center px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-3xl">
          ✅
        </div>

        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          Report Submitted Successfully
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for helping improve your locality.
          The municipality has been notified.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="/report"
            className="block w-full rounded-full bg-yellow-400 py-3 text-lg font-semibold text-black hover:bg-yellow-500 transition"
          >
            Report Another Issue
          </a>

          <a
            href="/"
            className="block w-full rounded-full border border-gray-300 py-3 text-gray-700"
          >
            Go to Home
          </a>
        </div>
      </div>
    </main>
  );
}
