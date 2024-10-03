import { NextResponse } from 'next/server';
import config from '@/config';

export async function GET() {
    try{

        const response = await fetch(`${config.apiUrl}/filter-options`, {
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