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

  /**on change function to create formSelectedData */
  const onChangeFormDataHandler = (e: any) => {
    setFormSelectedData((prevData: any) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  /**on submit handler*/
  const onClickAddNewItem = (e) => {
    e.preventDefault();
    //
    fetchingNewItem();
    setFormSelectedData({
      country: "",
      region: "",
      municipality: "",
      ageGroup: "",
      gender: "",
      livingSituation: "",
      surveyFiller: "",
    });
  };
  //

  return (
    <form className={Styles.form} onSubmit={onClickAddNewItem}>
      <div className={Styles.form__header}>
        <h3 className={Styles.form__title}>
          <FormatListBulletedRoundedIcon /> Select a municipality:
        </h3>
      </div>
      <ThemeProvider theme={selectInputTheme}>
        <FormControl variant="outlined" required>
          <InputLabel id="country">Country</InputLabel>
          <Select id="country" labelId="country" label="country" name="country" value={formSelectedData.country} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="sweden">Sweden</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" required>
          <InputLabel id="region">Region</InputLabel>
          <Select labelId="region" id="region" label="region" name="region" value={formSelectedData.region} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="skåne">Skane</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" required>
          <InputLabel id="municipality">Municipality</InputLabel>
          <Select labelId="municipality" id="municipality" name="municipality" label="Municipality" value={formSelectedData.municipality} onChange={(e) => onChangeFormDataHandler(e)}>
            <MenuItem value="lund">Lund</MenuItem>
            <MenuItem value="malmö">Malmö</MenuItem>
          </Select>
        </FormControl>

        <div className={Styles.divider}>&nbsp;</div>

        <FilterPanel />

        <br />
        <Button onClick={() => {}} type="btn-primary">
          {limitationListItemError ? "please, remove an item" : "Add municipality"}
          {limitationListItemError ? "" : <AddCircleOutlineRoundedIcon />}
        </Button>
      </ThemeProvider>
    </form>
  );
}

export default SidebarForm;
