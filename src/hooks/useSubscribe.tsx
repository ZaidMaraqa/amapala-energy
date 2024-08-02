import { mutate } from 'swr';

const subscribeFetcher = async (url: string, email: string) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        throw new Error('Failed to subscribe');
    }

    return response.json();
};


export const subscribe = async (email: string) => {
    try {
        await mutate('/api/joinNewsletter', subscribeFetcher('/api/joinNewsletter', email));
    } catch (error) {
        throw error;
    }
};


