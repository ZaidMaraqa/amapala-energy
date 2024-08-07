'use client';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (posthogKey && posthogHost) {
        posthog.init(posthogKey, {
            api_host: posthogKey,
            person_profiles: 'always',
        })
    }
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider
            theme={theme}
            toastOptions={{
                defaultOptions: {
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                },
            }}
        >
            {children}
        </ChakraProvider>
    );
}