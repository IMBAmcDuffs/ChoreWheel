import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import ChoreCard from "@/components/ChoreCard";
import ChoreForm from "@/components/ChoreForm";
import ChoreFilter from "@/components/ChoreFilter";

export default async function ChoreListPage() {
  const session = await auth();
  
  if (!session?.user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please sign in to view chore list</p>
      </div>
    );
  }

  const [chores, categories] = await Promise.all([
    prisma.chore.findMany({
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.chore.findDistinct({
      select: { category: true },
      orderBy: { category: "asc" },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chore List</h1>
        <ChoreForm />
      </div>

      <ChoreFilter categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chores.map((chore) => (
          <ChoreCard key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
}
