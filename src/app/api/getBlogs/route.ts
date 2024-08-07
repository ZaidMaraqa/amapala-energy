import config from '@/config';
import { NextResponse, NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
    try{
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('pageIndex');
        if (!page) {
            return NextResponse.json({ error: "Required params not found." }, { status: 400 });
        }
        const response = await fetch(`${config.apiUrl}/blogs?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe');
        }

        return response
    } catch (err) {
        return NextResponse.json(
          {
            success: false,
            message: 'Something went wrong',
          },
          { status: 500 }
        )
      }
    
}