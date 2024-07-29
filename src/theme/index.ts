import {
  Theme,
  extendTheme,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

export const theme: Theme = extendTheme(
  {
    styles: {
      global: {
        "html, body": {
          background: "#F2F2F2",
          cursor: "default",
          color: "black",
        },
        body: {
          color: "text",
          scrollbarWidth: "thin",
        },
        "::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
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
      base: '0em',
      sm: '18em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
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
        primeBlue: "#1352BF",
        primeGray: "#C8D0D6",

      },
    },
    fonts: {
      heading: "'General Sans', -apple-system, system-ui, sans-serif",
      body: "'General Sans', -apple-system, system-ui, sans-serif",
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
