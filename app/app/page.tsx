import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Welcome to ChoreWheel
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage household chores with your roommates
        </p>
        {!session?.user ? (
          <Link
            href="/login"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Sign In
          </Link>
        ) : (
          <Link
            href="/chore-list"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            View Chore List
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Add & assign chores</li>
            <li>✓ Track completion status</li>
            <li>✓ Filter & search</li>
            <li>✓ Fair rotation system</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>🍳 Kitchen</li>
            <li>🚿 Bathroom</li>
            <li>🛋️ Living Room</li>
            <li>🛏️ Bedroom</li>
            <li>🧺 Laundry</li>
            <li>🌳 Outdoor</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Status</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              Pending
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              Assigned
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Completed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
