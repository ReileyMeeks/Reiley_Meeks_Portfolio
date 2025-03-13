// pages/_app.tsx
import * as React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import glassTheme from "../theme/glass_theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={glassTheme}>
      {/* Normalize/Reset CSS for MUI */}
      <CssBaseline />
      {/* Your main app component */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;