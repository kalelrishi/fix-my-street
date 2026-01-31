"use client";

import { useState } from "react";

const initialIssues = [
  {
    id: 1,
    type: "Pothole",
    location: "Near Main Road",
    status: "Reported",
  },
  {
    id: 2,
    type: "Garbage",
    location: "Market Area",
    status: "In Progress",
  },
  {
    id: 3,
    type: "Street Light",
    location: "Bus Stop",
    status: "Reported",
  },
];

export default function AdminIssuesPage() {
  const [issues, setIssues] = useState(initialIssues);

  function updateStatus(id: number, newStatus: string) {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  }

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Municipality Admin panel
      </h1>

      <p className="mt-3 text-center text-lg text-gray-700">
        Manage and update reported public issues
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="rounded-2xl bg-white p-6 shadow-lg"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {issue.type}
                </h2>
                <p className="text-sm text-gray-600">
                  📍 {issue.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select
                value={issue.status}
                onChange={(e) => updateStatus(issue.id, e.target.value)}
                className="rounded-xl border-2 border-yellow-500 bg-white p-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                <option>Reported</option>
                <option>In Progress</option>
                <option>Resolved</option>
                </select>


                <button className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
