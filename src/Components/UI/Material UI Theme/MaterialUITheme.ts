import { createTheme } from "@mui/material";

export const selectInputTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "var(--border-radius-sm)",
          height: "4.2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& svg": {
            fontSize: "var(--icon-size-24)",
          },
        },
        select: {
          fontSize: "var(--font-s-xs)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "var(--box-shadow)",
          padding: "var(--padding-xs)",
          borderRadius: "var(--border-radius-md)",
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-xs)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "Var(--border-radius-sm)",
          fontSize: "var(--font-s-xxs)",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "var(--font-s-xs)",
          color: "var(--color-gray-700)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
});
