import Styles from "./FilterPanel.module.css";
import React, { useEffect, useState } from "react";
import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "./../../../../UI/Material UI Theme/MaterialUITheme";
import { KeyboardArrowDownRoundedIcon, TuneRoundedIcon } from "../../../../UI/Icons/IconsLibrary";
import { useGlobalContext } from "../../../../../Context/GlobalContext";
import { SnackbarAlert } from "../../../../UI/Snackbar/SnackbarAlert";

function FilterPanel() {
  const { formSelectedData, setFormSelectedData }: any = useGlobalContext();
  const [showFIlterPanel, setShowFilterPanel] = useState<null | boolean>(false);

  /**toggle function to open and close th emore option filter panel in sidebar */
  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFIlterPanel);
  };
  //

  /*updating formSelectedData which use for fetching to add new item to list */
  const onChangeFormDataHandler = (e: any) => {
    setFormSelectedData((prevData: any) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  //

  return (
    <div className={`${Styles.filterPanel} ${showFIlterPanel && Styles.filterPanel__open}`}>
      <div className={`${Styles.filterPanel__header} ${showFIlterPanel && Styles.filterPanel__header__open}`} onClick={toggleFilterPanel}>
        <h3 className={Styles.filterPanel__title}>
          <TuneRoundedIcon /> More options
        </h3>
        <KeyboardArrowDownRoundedIcon />
      </div>

      <ThemeProvider theme={selectInputTheme}>
        <div className={Styles.ageGender}>
          <FormControl variant="outlined">
            <InputLabel id="age">Age group</InputLabel>
            <Select labelId="age" id="age" label="age group" name="ageGroup" value={formSelectedData.ageGroup} onChange={(e) => onChangeFormDataHandler(e)}>
              <MenuItem value="65-69">65-69</MenuItem>
              <MenuItem value="70-74">70-74</MenuItem>
              <MenuItem value="75-79">75-79</MenuItem>
              <MenuItem value="80-84">80-84</MenuItem>
              <MenuItem value="85-89">85-89</MenuItem>
              <MenuItem value="90-94">90-94</MenuItem>
              <MenuItem value="95-99">95-99</MenuItem>
              <MenuItem value="99+">Above 95+</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel id="gender">Gender</InputLabel>
            <Select labelId="gender" id="gender" label="gender" name="gender" value={formSelectedData.gender} onChange={(e) => onChangeFormDataHandler(e)}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>

        <FormControl variant="outlined">
          <InputLabel id="Living situation">Living situation</InputLabel>
          <Select labelId="Living situation" id="Living situation" label="Living situation" name="livingSituation" value={formSelectedData.livingSituation} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="Living_at_home">Living at home</MenuItem>
            <MenuItem value="Living_at_home_with_home_care">Living at home with home care</MenuItem>
            <MenuItem value="Living_in_a_nursing_home">Living in a nursing home</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel id="assistance">Assistance</InputLabel>
          <Select labelId="assistance" id="assistance" label="assistance" name="surveyFiller" value={formSelectedData.surveyFiller} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="noHelp">I did’t have any help</MenuItem>
            <MenuItem value="someone">Someone else read the questions to me</MenuItem>
            <MenuItem value="someTranslate">Someone else translate the questions to me</MenuItem>
            <MenuItem value="wrote">Someone else wrote down the answer for me</MenuItem>
            <MenuItem value="talkSomeone">I talked through the questions with someone</MenuItem>
            <MenuItem value="translate">Someone else translate the questions to me</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default FilterPanel;
