
import config from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
        const { email } = await req.json()

        const response = await fetch(`${config.apiUrl}/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
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
