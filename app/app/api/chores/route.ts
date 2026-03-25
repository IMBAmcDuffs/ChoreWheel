import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const choreSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  category: z.enum(["kitchen", "bathroom", "living_room", "bedroom", "laundry", "outdoor", "other"]),
  dueDate: z.string().datetime().optional(),
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let query: any = {};

  if (category) {
    query.category = category;
  }

  if (search) {
    query.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const chores = await prisma.chore.findMany({
    where: query,
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
  });

  return NextResponse.json(chores);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = choreSchema.parse(body);

    const chore = await prisma.chore.create({
      data: {
        ...validated,
        status: "pending",
      },
    });

    return NextResponse.json(chore, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create chore" },
      { status: 500 }
    );
  }
}
