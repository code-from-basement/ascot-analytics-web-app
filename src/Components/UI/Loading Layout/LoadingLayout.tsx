import React from "react";
import Styles from "./LoadingLayout.module.css";
import { CircularProgress, ThemeProvider } from "@mui/material";
import { loadingTheme } from "../Material UI Theme/MaterialUITheme";

function LoadingLayout() {
  return (
    <div className={Styles.loadingContainer}>
      <div className={Styles.loadingObject}>
        <ThemeProvider theme={loadingTheme}>
          <CircularProgress variant="indeterminate" />
          <p>Loading ...</p>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default LoadingLayout;
