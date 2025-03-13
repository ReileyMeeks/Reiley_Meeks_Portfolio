// theme/glass_theme.ts
import { createTheme } from "@mui/material/styles";

// Example: A dark mode theme with some "glass" styling
const glassTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0", // Purple
    },
    secondary: {
      main: "#f50057", // Pink
    },
  },
  components: {
    // Example: Override the Paper component to have a glass effect
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          // add additional styles as needed
        },
      },
    },
    // You can override other components similarly
  },
});

export default glassTheme;