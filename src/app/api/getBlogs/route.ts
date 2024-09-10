import { NextRequest, NextResponse } from 'next/server';

import config from '@/config';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('pageIndex');
        const search = searchParams.get('search') || '';
        const category = searchParams.get('category') || '';
        const country = searchParams.get('country') || '';
        const pageSize = searchParams.get('pageSize') || '';

        if (!page) {
            return NextResponse.json({ error: "Required params not found." }, { status: 400 });
        }

        let apiUrl = `${config.apiUrl}/blogs?page=${page}`;

        if (search) {
            apiUrl += `&search=${encodeURIComponent(search)}`;
        }
        if (category) {
            apiUrl += `&category=${encodeURIComponent(category)}`;
        }
        if (country) {
            apiUrl += `&country=${encodeURIComponent(country)}`;
        }

        if(pageSize){
            apiUrl += `&page_size=${encodeURIComponent(pageSize)}`;
        }

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong',
            },
            { status: 500 }
        );
    }
}
