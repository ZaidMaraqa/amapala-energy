import {
    Theme,
    extendTheme,
    withDefaultColorScheme,
    baseTheme,
    background,
  } from "@chakra-ui/react";

import "@fontsource/roboto"; 
import "@fontsource/roboto/300.css"; 
import "@fontsource/roboto/700.css"
  
  
  
  export const theme: Theme = extendTheme(
    {
      styles: {
        global: {
          "html, body": {
            background: "white",
            cursor: "default",
            color: "black",
          },
          body: {
            color: "text",
            scrollbarWidth: "thin",
          },
          "::-webkit-scrollbar": {
            width: "10px",
            height: "10px",
          },
  
          "::-webkit-scrollbar-thumb": {
            background: "#5D4168",
            borderRadius: "100px",
          },
  
          "::-webkit-scrollbar-track": {
            background: "#1A112C",
            borderRadius: "100px",
            marginLeft: "2px",
          }
        },
      },
      breakpoints: {
        sm: '520px',
        md: '568px',
        lg: '1024px',
        xl: '1476px',
        '2xl': '2200px',
      },
      colors: {
        green: {
          ...baseTheme.colors.green,
          200: "#25C34C",
        },
        lightGreen: {
          50: '#e6f7f5',
          100: '#c3eceb',
          200: '#9de1e0',
          300: '#76d6d5',
          400: '#4ECEC7',
          500: '#25b3b0',
          600: '#1c8d8a',
          700: '#136764',
          800: '#0a413e',
          900: '#021b19',
  
        }
      },
      semanticTokens: {
        colors: {
          text: "white",
          brightBlue: "#87F1EB",
          pink: "#E70EE6",
          lightPurple: "#AD85FF",
          lightBlue: "#5698FF",
          lightGreen: "#4ECEC7",
        },
      },
      fonts: {
        heading: "'Brown', -apple-system, system-ui, sans-serif",
        body: "'Brown', -apple-system, system-ui, sans-serif",
      },
      components: {
      },
      config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
      },
    },
    withDefaultColorScheme({ colorScheme: "primary" })
  ) as Theme;
  