"use client";

import { useState } from "react";
import { Chore } from "@prisma/client";

interface ChoreCardProps {
  chore: Chore & { assignee?: { id: string; email: string; name?: string } };
}

export default function ChoreCard({ chore }: ChoreCardProps) {
  const [isCompleted, setIsCompleted] = useState(!!chore.completedAt);

  const handleComplete = async () => {
    try {
      await fetch(`/api/chores/${chore.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completedAt: new Date() }),
      });
      setIsCompleted(true);
    } catch (err) {
      console.error("Failed to complete chore:", err);
    }
  };

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    assigned: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  return (
    <div className={`bg-white rounded-lg shadow border p-4 ${chore.status === "completed" ? "opacity-75" : ""}`}>
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[chore.status.toLowerCase()]}`}>
          {chore.status}
        </span>
        <span className="text-xs text-gray-500">
          {chore.category}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1">{chore.title}</h3>
      {chore.description && (
        <p className="text-gray-600 text-sm mb-3">{chore.description}</p>
      )}

      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
        <span>Due: {chore.dueDate ? new Date(chore.dueDate).toLocaleDateString() : "No due date"}</span>
        {chore.assignee && (
          <span>
            {chore.assignee.name || chore.assignee.email}
          </span>
        )}
      </div>

      <button
        onClick={handleComplete}
        disabled={isCompleted}
        className={`w-full py-2 rounded ${
          isCompleted
            ? "bg-green-500 text-white cursor-default"
            : "bg-primary-600 text-white hover:bg-primary-700"
        }`}
      >
        {isCompleted ? "✓ Completed" : "Mark Complete"}
      </button>
    </div>
  );
}
