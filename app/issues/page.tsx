"use client";

const mockIssues = [
  {
    id: 1,
    type: "Pothole",
    status: "Reported",
    location: "Near Main Road",
  },
  {
    id: 2,
    type: "Garbage",
    status: "In Progress",
    location: "Market Area",
  },
  {
    id: 3,
    type: "Street Light",
    status: "Resolved",
    location: "Bus Stop",
  },
];

function getIcon(type: string) {
  switch (type) {
    case "Pothole":
      return "🕳️";
    case "Garbage":
      return "🗑️";
    case "Street Light":
      return "💡";
    case "Dead Animal":
      return "🐄";
    case "Water Leakage":
      return "🚰";
    case "Accident":
      return "🚑";
    case "Street Dogs":
      return "🐕";
    default:
      return "⚠️";
  }
}

export default function IssuesPage() {
  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Public Issues
      </h1>

      <p className="mt-3 text-center text-lg text-gray-700">
        Issues reported by citizens in your locality
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {mockIssues.map((issue) => (
          <div
            key={issue.id}
            className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg"
          >
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-yellow-100 text-4xl">
              {getIcon(issue.type)}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {issue.type}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  📍 {issue.location}
                </p>
              </div>

              <span
                className={`mt-3 inline-block w-fit rounded-full px-4 py-1 text-sm font-semibold
                  ${
                    issue.status === "Reported"
                      ? "bg-red-100 text-red-700"
                      : issue.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                {issue.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
