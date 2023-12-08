import React, { useState } from "react";
import Styles from "./SnackbarAlert.module.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ThemeProvider } from "@emotion/react";
import { snackbarTheme } from "../Material UI Theme/MaterialUITheme";
import { useGlobalContext } from "../../../Context/GlobalContext";

function SnackbarAlert({ severity, message, autoHideDuration }: any) {
  const { openSnackBar, setOpenSnackBar } = useGlobalContext();
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className={Styles.snackbarContainer}>
      <ThemeProvider theme={snackbarTheme}>
        <Snackbar open={openSnackBar} autoHideDuration={autoHideDuration}>
          <Alert severity={severity} sx={{ fontSize: 14, width: "100%", height: 60, alignItems: "center" }}>
            {message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
}

export { SnackbarAlert };
