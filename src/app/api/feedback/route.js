import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { name, email, company, features, comments } = await request.json();

        const feedback = await prisma.feedback.create({
            data: {
                name,
                email,
                company,
                features,
                comments,
            },
        });

        return NextResponse.json({ success: true, feedback });
    } catch (error) {
        console.error('Error creating feedback:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit feedback' },
            { status: 500 }
        );
    }
} 