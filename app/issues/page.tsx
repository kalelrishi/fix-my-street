"use client";

import { useEffect, useState } from "react";

type Issue = {
  id: number;
  type: string;
  location: string;
  status: string;
  likes: number;
};

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [supported, setSupported] = useState<number[]>([]);

  // Load issues & supported list
  useEffect(() => {
    const storedIssues = localStorage.getItem("issues");
    const storedSupported = localStorage.getItem("supportedIssues");

    if (storedIssues) {
      const parsed = JSON.parse(storedIssues).map((i: any) => ({
        ...i,
        likes: i.likes ?? 0,
      }));
      setIssues(parsed);
      localStorage.setItem("issues", JSON.stringify(parsed));
    }

    if (storedSupported) {
      setSupported(JSON.parse(storedSupported));
    }
  }, []);

  function toggleSupport(id: number) {
    let updatedIssues = [...issues];
    let updatedSupported = [...supported];

    const index = updatedSupported.indexOf(id);

    if (index === -1) {
      // 👍 Add support
      updatedSupported.push(id);
      updatedIssues = updatedIssues.map((issue) =>
        issue.id === id
          ? { ...issue, likes: issue.likes + 1 }
          : issue
      );
    } else {
      // 👎 Remove support
      updatedSupported.splice(index, 1);
      updatedIssues = updatedIssues.map((issue) =>
        issue.id === id
          ? { ...issue, likes: Math.max(issue.likes - 1, 0) }
          : issue
      );
    }

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

                {/* Support toggle */}
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
