"use client";

interface ChoreFilterProps {
  categories: { category: string }[];
}

export default function ChoreFilter({ categories }: ChoreFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"createdAt" | "dueDate">("createdAt");

  return (
    <div className="bg-white p-4 rounded-lg shadow border space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-1">Search</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chores..."
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.category} value={cat.category}>
                {cat.category.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-1">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "createdAt" | "dueDate")}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="createdAt">Newest First</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>
      </div>
    </div>
  );
}
