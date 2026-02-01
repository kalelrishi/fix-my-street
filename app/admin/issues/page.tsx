"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Issue = {
  id: number;
  type: string;
  location: string;
  status: string;
};

const DEFAULT_ISSUES: Issue[] = [
  { id: 1, type: "Pothole", location: "Near Main Road", status: "Reported" },
  { id: 2, type: "Garbage", location: "Market Area", status: "In Progress" },
  { id: 3, type: "Street Light", location: "Bus Stop", status: "Reported" },
];

export default function AdminIssuesPage() {
  const router = useRouter();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [draftStatus, setDraftStatus] = useState<Record<number, string>>({});

  // Protect admin page + load issues
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.replace("/admin");
      return;
    }

    const stored = localStorage.getItem("issues");
    if (stored) {
      const parsed = JSON.parse(stored);
      setIssues(parsed);

      const drafts: Record<number, string> = {};
      parsed.forEach((i: Issue) => {
        drafts[i.id] = i.status;
      });
      setDraftStatus(drafts);
    } else {
      localStorage.setItem("issues", JSON.stringify(DEFAULT_ISSUES));
      setIssues(DEFAULT_ISSUES);

      const drafts: Record<number, string> = {};
      DEFAULT_ISSUES.forEach((i) => {
        drafts[i.id] = i.status;
      });
      setDraftStatus(drafts);
    }
  }, [router]);

  function handleUpdate(id: number) {
    const updated = issues.map((issue) =>
      issue.id === id
        ? { ...issue, status: draftStatus[id] }
        : issue
    );

    setIssues(updated);
    localStorage.setItem("issues", JSON.stringify(updated));
  }

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-black text-center">
        Municipality Admin Panel
      </h1>

      <p className="mt-3 text-center text-lg text-gray-700">
        Review and update reported public issues
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {issues.map((issue) => (
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
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={draftStatus[issue.id]}
                  onChange={(e) =>
                    setDraftStatus({
                      ...draftStatus,
                      [issue.id]: e.target.value,
                    })
                  }
                  className="rounded-xl border-2 border-yellow-500 bg-white p-3 text-black font-semibold"
                >
                  <option>Reported</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>

                <button
                  onClick={() => handleUpdate(issue.id)}
                  className="rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black hover:bg-yellow-500 transition"
                >
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
