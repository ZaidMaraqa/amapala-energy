
import config from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
        const { name, job_title, company, subject, request } = await req.json()

        const response = await fetch(`${config.apiUrl}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, job_title, company, subject, request })
        });

        if (!response.ok) {
            throw new Error('Failed to send contact email');
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
