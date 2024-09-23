'use client';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';

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