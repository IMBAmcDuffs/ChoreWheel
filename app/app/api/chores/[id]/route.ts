import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<Response> {
  try {
    const { id } = await params;
    const chore = await prisma.chore.findUnique({
      where: { id },
      include: {
        assignee: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    if (!chore) {
      return NextResponse.json(
        { error: "Chore not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(chore);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch chore" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
): Promise<Response> {
  try {
    const { id } = await params;
    const body = await request.json();
    const validated = z.object({
      title: z.string().min(1).optional(),
      description: z.string().optional(),
      category: z.enum(["kitchen", "bathroom", "living_room", "bedroom", "laundry", "outdoor", "other"]).optional(),
      dueDate: z.string().datetime().optional(),
      status: z.enum(["pending", "assigned", "completed"]).optional(),
      completedAt: z.string().datetime().optional(),
      assigneeId: z.string().optional(),
    }).parse(body);

    const chore = await prisma.chore.update({
      where: { id },
      data: validated,
    });

    return NextResponse.json(chore);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update chore" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
): Promise<Response> {
  try {
    const { id } = await params;
    await prisma.chore.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Chore deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete chore" },
      { status: 500 }
    );
  }
}
