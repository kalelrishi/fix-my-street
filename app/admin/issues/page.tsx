"use client";

import { useEffect, useState } from "react";

type Issue = {
  id: number;
  type: string;
  location: string;
  status: string;
  likes: number;
};

const DEFAULT_ISSUES: Issue[] = [
  {
    id: 1,
    type: "Pothole",
    location: "Near Main Road",
    status: "Reported",
    likes: 0,
  },
  {
    id: 2,
    type: "Garbage",
    location: "Market Area",
    status: "In Progress",
    likes: 0,
  },
  {
    id: 3,
    type: "Street Light",
    location: "Bus Stop",
    status: "Reported",
    likes: 0,
  },
];

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [supported, setSupported] = useState<number[]>([]);

  useEffect(() => {
    // Load or initialize issues
    const storedIssues = localStorage.getItem("issues");
    const storedSupported = localStorage.getItem("supportedIssues");

    if (storedIssues) {
      setIssues(JSON.parse(storedIssues));
    } else {
      localStorage.setItem("issues", JSON.stringify(DEFAULT_ISSUES));
      setIssues(DEFAULT_ISSUES);
    }

    if (storedSupported) {
      setSupported(JSON.parse(storedSupported));
    }
  }, []);

  function toggleSupport(id: number) {
    const isSupported = supported.includes(id);

    const updatedIssues = issues.map((issue) =>
      issue.id === id
        ? {
            ...issue,
            likes: isSupported
              ? Math.max(issue.likes - 1, 0)
              : issue.likes + 1,
          }
        : issue
    );

    const updatedSupported = isSupported
      ? supported.filter((i) => i !== id)
      : [...supported, id];

    setIssues(updatedIssues);
    setSupported(updatedSupported);

    localStorage.setItem("issues", JSON.stringify(updatedIssues));
    localStorage.setItem(
      "supportedIssues",
      JSON.stringify(updatedSupported)
    );
  }

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-black text-center">
        Public Issues
      </h1>

      <p className="mt-3 text-center text-lg text-gray-700">
        Support issues to help prioritize municipal action
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {issues.map((issue) => {
          const isSupported = supported.includes(issue.id);

          return (
            <div
              key={issue.id}
              className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    {issue.type}
                  </h2>
                  <p className="text-sm text-gray-700">
                    📍 {issue.location}
                  </p>

                  <span
                    className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold
                      ${
                        issue.status === "Reported"
                          ? "bg-red-200 text-red-900"
                          : issue.status === "In Progress"
                          ? "bg-yellow-300 text-yellow-900"
                          : "bg-green-300 text-green-900"
                      }
                    `}
                  >
                    {issue.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleSupport(issue.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition
                      ${
                        isSupported
                          ? "bg-yellow-400 text-black"
                          : "border border-gray-300 text-black hover:bg-yellow-100"
                      }
                    `}
                  >
                    {isSupported ? "✓ Supported" : "👍 Support"}
                  </button>

                  <span className="text-sm font-medium text-gray-700">
                    {issue.likes} supporters
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
