import { createTheme } from "@mui/material";

export const selectInputTheme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        size: "medium",
      },
      styleOverrides: {
        icon: {
          fontSize: "var(--icon-size-24)",
          transition: "var(--transition)",
        },
      },
    },
  },
});
