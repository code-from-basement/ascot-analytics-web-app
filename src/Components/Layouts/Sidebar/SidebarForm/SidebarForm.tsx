import Styles from "./SidebarForm.module.css";
import React from "react";

import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "../../../UI/Material UI Theme/MaterialUITheme";

function SidebarForm() {
  return (
    <div className={Styles.form}>
      <ThemeProvider theme={selectInputTheme}>
        <FormControl variant="outlined">
          <InputLabel>Country</InputLabel>
          <Select labelId="country" id="country" label="country-------">
            <MenuItem value="SelectCountry">Select a country</MenuItem>
            <MenuItem value="sweden">Sweden</MenuItem>
            <MenuItem value="england">England</MenuItem>
            <MenuItem value="finland">Finland</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="region">Region</InputLabel>
          <Select labelId="region" id="region" label="region-------">
            <MenuItem value="SelectRegion">Select a region</MenuItem>
            <MenuItem value="skane">Skane</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="city">City</InputLabel>
          <Select labelId="city" id="city" label="city----">
            <MenuItem value="SelectCity">Select a city</MenuItem>
            <MenuItem value="lund">Lund</MenuItem>
            <MenuItem value="malmo">Malmo</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default SidebarForm;
