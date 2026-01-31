"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const initialIssues = [
  { id: 1, type: "Pothole", location: "Near Main Road", status: "Reported" },
  { id: 2, type: "Garbage", location: "Market Area", status: "In Progress" },
  { id: 3, type: "Street Light", location: "Bus Stop", status: "Reported" },
];

export default function AdminIssuesPage() {
  const router = useRouter();
  const [issues, setIssues] = useState(initialIssues);
  const [checked, setChecked] = useState(false);

  // 🔒 Protect route AFTER browser loads
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAdmin = localStorage.getItem("isAdmin");
      if (!isAdmin) {
        router.replace("/admin");
      } else {
        setChecked(true);
      }
    }
  }, [router]);

  function updateStatus(id: number, newStatus: string) {
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  }

  // ⏳ Prevent flicker / redirect loop
  if (!checked) return null;

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-black text-center">
        Municipality Admin Panel
      </h1>

      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-bold text-black">{issue.type}</h2>
            <p className="text-gray-700">📍 {issue.location}</p>

            <select
              value={issue.status}
              onChange={(e) =>
                updateStatus(issue.id, e.target.value)
              }
              className="mt-3 rounded-xl border-2 border-yellow-500 bg-white p-3 text-black font-semibold"
            >
              <option>Reported</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
        ))}
      </div>
    </main>
  );
}
