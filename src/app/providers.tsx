'use client';

import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>

    );
}