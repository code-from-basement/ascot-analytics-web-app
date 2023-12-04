import Styles from "./SidebarForm.module.css";
import React from "react";
import Button from "../../../UI/Buttons/Buttons";
import FilterPanel from "./FilterPanel/FilterPanel";
import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "../../../UI/Material UI Theme/MaterialUITheme";
import { AddCircleOutlineRoundedIcon, FormatListBulletedRoundedIcon } from "../../../UI/Icons/IconsLibrary";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function SidebarForm() {
  const { setFormSelectedData, formSelectedData, fetchingNewItem, limitationListItemError }: any = useGlobalContext();

  const onChangeFormDataHandler = (e: any) => {
    setFormSelectedData((prevData: any) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const onClickAddNewItem = () => {
    fetchingNewItem();
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
          <Select required id="country" labelId="country" label="country" name="country" value={formSelectedData.country} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="Sweden">Sweden</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel id="region">Region</InputLabel>
          <Select required labelId="region" id="region" label="region" name="region" value={formSelectedData.region} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Skane">Skane</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel id="municipality">Municipality</InputLabel>
          <Select required labelId="municipality" id="municipality" name="municipality" label="Municipality" value={formSelectedData.municipality} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="Lund">Lund</MenuItem>
            <MenuItem value="Malmö">Malmö</MenuItem>
          </Select>
        </FormControl>

        <div className={Styles.divider}>&nbsp;</div>

        <FilterPanel />

        <br />
        <Button onClick={onClickAddNewItem} type="btn-primary">
          {limitationListItemError ? "please, remove an item" : "Add municipality"}
          {limitationListItemError ? "" : <AddCircleOutlineRoundedIcon />}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default SidebarForm;
