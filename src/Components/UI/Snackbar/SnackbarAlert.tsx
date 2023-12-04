import React, {useState} from 'react'
import Styles from "./SnackbarAlert.module.css"
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { ThemeProvider } from '@emotion/react';
import { snackbarTheme } from '../Material UI Theme/MaterialUITheme';

function SnackbarAlert({severity, message} : any) {

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={Styles.snackbarContainer}>
      <button onClick={handleClick}>Open snackbar</button>
      <ThemeProvider theme={snackbarTheme} >
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} >
          <Alert severity={severity} sx={{ fontSize: 14 , width: '100%', height:60 , alignItems:"center" }}>
            {message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  )
}

export {SnackbarAlert};