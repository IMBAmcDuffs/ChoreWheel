"use client";

import { useState } from "react";

interface ChoreFormProps {
  onSubmit: (data: {
    title: string;
    description?: string;
    category: string;
    dueDate?: string;
  }) => Promise<void>;
}

export default function ChoreForm({ onSubmit }: ChoreFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("kitchen");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await onSubmit({
        title,
        description,
        category,
        dueDate: dueDate || undefined,
      });
      setTitle("");
      setDescription("");
      setCategory("kitchen");
      setDueDate("");
      setError("");
    } catch (err: any) {
      setError(err.message || "Failed to create chore");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow border">
      <h3 className="text-lg font-semibold mb-4">Add New Chore</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g., Wash dishes"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Optional description"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="living_room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="laundry">Laundry</option>
            <option value="outdoor">Outdoor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {error && <div className="bg-red-50 text-red-600 p-2 rounded text-sm">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Chore"}
        </button>
      </div>
    </form>
  );
}
