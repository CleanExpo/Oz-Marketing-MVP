import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Check credentials
        if (email === 'admin@gmail.com' && password === 'admin') {
            return NextResponse.json({
                success: true,
                message: 'Authentication successful'
            });
        }

        return NextResponse.json(
            { success: false, error: 'Invalid credentials' },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Authentication failed' },
            { status: 500 }
        );
    }
} 