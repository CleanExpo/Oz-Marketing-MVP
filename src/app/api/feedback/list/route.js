import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;

        const [feedbacks, total] = await Promise.all([
            prisma.feedback.findMany({
                skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            prisma.feedback.count()
        ]);

        return NextResponse.json({
            success: true,
            feedbacks,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch feedbacks' },
            { status: 500 }
        );
    }
} 