import Styles from "./FilterPanel.module.css";
import React from "react";
import { ReplayRoundedIcon } from "./../../../UI/Icons/IconsLibrary";
import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "../../../UI/Material UI Theme/MaterialUITheme";
import Button from "../../../UI/Buttons/Buttons";

function FilterPanel() {
  return (
    <div className={Styles.filterPanel}>
      <h2>Filter panel:</h2>
      <ThemeProvider theme={selectInputTheme}>
        <div className={Styles.ageGender}>
          <FormControl variant="outlined">
            <InputLabel id="age">Age group</InputLabel>
            <Select labelId="age" id="age" label="age group">
              <MenuItem value="6569">65-69</MenuItem>
              <MenuItem value="7074">70-74</MenuItem>
              <MenuItem value="7074">70-74</MenuItem>
              <MenuItem value="7579">75-79</MenuItem>
              <MenuItem value="8084">80-84</MenuItem>
              <MenuItem value="8589">85-89</MenuItem>
              <MenuItem value="9094">90-94</MenuItem>
              <MenuItem value="95+">Above 95+</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="gender">Gender</InputLabel>
            <Select labelId="gender" id="gender" label="gender">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControl variant="outlined">
          <InputLabel id="assistance">Assistance</InputLabel>
          <Select labelId="assistance" id="assistance" label="assistance">
            <MenuItem value="">I did’t have any help</MenuItem>
            <MenuItem value="2">Someone else read the questions to me</MenuItem>
            <MenuItem value="3">Someone else translate the questions to me</MenuItem>
            <MenuItem value="4">Someone else wrote down the answer for me</MenuItem>
            <MenuItem value="5">I talked through the questions with someone</MenuItem>
            <MenuItem value="6">Someone else translate the questions to me</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="living-situation">Living Situation</InputLabel>
          <Select labelId="living-situation" id="living-situation" label="living-situation">
            <MenuItem value="home">Living at home</MenuItem>
            <MenuItem value="home with care">Living at home with home care</MenuItem>
            <MenuItem value="nursing home">Living in a nursing home</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
      <div className={Styles.btnRow}>
        <Button onClick={() => {}} type="btn-outline">
          <ReplayRoundedIcon />
        </Button>
        <Button onClick={() => {}} type="btn-primary">
          Apply filter
        </Button>
      </div>
    </div>
  );
}

export default FilterPanel;
