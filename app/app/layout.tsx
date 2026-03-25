import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChoreWheel - Roommate Chore Management",
  description: "Manage household chores with your roommates",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">ChoreWheel</h1>
            {session?.user && (
              <div className="flex items-center gap-4">
                <span className="text-sm">{session.user.email}</span>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button type="submit" className="bg-white text-primary-600 px-3 py-1 rounded text-sm">
                    Sign Out
                  </button>
                </form>
              </div>
            )}
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
