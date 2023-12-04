import { createTheme } from "@mui/material";

/* Theme for the select input */
export const selectInputTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "4.2rem",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
        sx: {
          borderRadius: "var(--border-radius-sm)",
          height: "4.2rem",
        },
      },
      styleOverrides: {
        icon: {
          fontSize: "var(--icon-size-24)",
          transition: "var(--transition)",
        },
        root: {
          fontSize: "var(--font-s-xs)",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {},
      },
      styleOverrides: {
        root: {
          // position: "relative",
          top: "-4px",
          fontSize: "var(--font-s-xs)",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        sx: {
          marginTop: "var(--padding-xs)",
        },
      },
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
          fontSize: "var(--font-s-xs)",
          borderRadius: "var(--border-radius-sm)",
          transition: "var(--transition)",
        },
      },
    },
  },
});

/* Theme for the Loading Layout */
export const loadingTheme =createTheme({
  components: {
    MuiCircularProgress: {
      defaultProps: {
        size: 60,
        thickness: 5,
      },
      styleOverrides: {
        root: {
          color: "var(--color-primary)",

        },
      },
    },
  },
});

/*Theme for snackbar Alert */
export const snackbarTheme = createTheme({
  components: {
    MuiSnackbar: {
      defaultProps:{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        
      },
      styleOverrides: {
        root: {
          width: "400px", 
              
        },
      },
      
    },
  // MuiAlert: {
  //   styleOverrides:{
  //     root:{
  //       eventHandlers:  {
  //         onClose: {
  //           color: 'red',
  //           backgroundColor: 'black',
  //           opacity: 0.8,
  //           fontSize: '1.5rem',
  //           fontWeight: 500,
  //           fontFamily: 'Roboto',
  //           '&:hover': {
  //             opacity: 1,
  //           },
  //         },
  //       }, 
  //     }
  //   }
  // }
  },
})

  
