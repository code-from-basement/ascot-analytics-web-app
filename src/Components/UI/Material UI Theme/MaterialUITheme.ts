import { createTheme } from "@mui/material";

export const selectInputTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          fontSize: "var(--icon-size-24)",
          transition: "var(--transition)",
        },
        outlined: {
          // border: "2px solid var(--color-gray-500)",
        },
      },
    },
  },
});
