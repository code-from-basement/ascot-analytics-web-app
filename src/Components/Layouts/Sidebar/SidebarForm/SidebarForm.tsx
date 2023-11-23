import Styles from "./SidebarForm.module.css";
import React from "react";
import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "../../../UI/Material UI Theme/MaterialUITheme";
import { AddCircleOutlineRoundedIcon, FormatListBulletedRoundedIcon } from "../../../UI/Icons/IconsLibrary";
import Button from "../../../UI/Buttons/Buttons";
import FilterPanel from "./FilterPanel/FilterPanel";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function SidebarForm() {
  const { setFormSelectedData, formSelectedData } = useGlobalContext();

  const onChangeFormDataHandler = (e) => {
    setFormSelectedData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={Styles.form}>
      <div className={Styles.form__header}>
        <h3 className={Styles.form__title}>
          <FormatListBulletedRoundedIcon /> Select a municipality:
        </h3>
      </div>
      <ThemeProvider theme={selectInputTheme}>
        <FormControl variant="outlined">
          <InputLabel id="country">Country</InputLabel>
          <Select id="country" labelId="country" label="country" name="country" required value={formSelectedData.country} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="sweden">Sweden</MenuItem>
            <MenuItem value="england">England</MenuItem>
            <MenuItem value="finland">Finland</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="region">Region</InputLabel>
          <Select labelId="region" id="region" label="region" name="region" value={formSelectedData.region} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="skane">Skane</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="municipality">City</InputLabel>
          <Select labelId="municipality" id="municipality" name="municipality" label="Municipality" value={formSelectedData.municipality} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="lund">Lund</MenuItem>
            <MenuItem value="malmo">Malmo</MenuItem>
          </Select>
        </FormControl>
        <div className={Styles.divider}>&nbsp;</div>

        <FilterPanel />

        <br />
        <Button onClick={() => {}} type="btn-primary">
          Add municipality
          <AddCircleOutlineRoundedIcon />
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default SidebarForm;
