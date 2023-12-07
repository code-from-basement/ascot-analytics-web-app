import Styles from "./SidebarForm.module.css";
import React, { useEffect, useState } from "react";
import Button from "../../../UI/Buttons/Buttons";
import FilterPanel from "./FilterPanel/FilterPanel";
import { FormControl, Select, InputLabel, MenuItem, ThemeProvider } from "@mui/material";
import { selectInputTheme } from "../../../UI/Material UI Theme/MaterialUITheme";
import { AddCircleOutlineRoundedIcon, FormatListBulletedRoundedIcon } from "../../../UI/Icons/IconsLibrary";
import { useGlobalContext } from "../../../../Context/GlobalContext";

const countryListUrl = "https://hestia-agora.com/ascot/country/";
const regionListUrl = "https://hestia-agora.com/ascot/regions/";
const municipalityListUrl = "https://hestia-agora.com/ascot/municipality/";
const urlLists: any = [countryListUrl, regionListUrl, municipalityListUrl];

function SidebarForm() {
  const { setFormSelectedData, formSelectedData, fetchingNewItem, limitationListItemError, setIsLoading }: any = useGlobalContext();

  /**Fetching List Items in filters */

  const [filtersListData, setFiltersListsData] = useState({
    countries: [],
    regions: [],
    municipalities: [],
  });

  console.log(filtersListData, "----------------");

  async function fetchingFiltersLists(urlLists: []) {
    try {
      setIsLoading(true);
      const response = await Promise.all(urlLists.map((url) => fetch(url)));
      const data = await Promise.all(response.map((item) => item.json()));

      setFiltersListsData({
        countries: data[0].COUNTRIES,
        regions: data[1].REGIONS,
        municipalities: data[2].MUNICIPALITIES,
      });
    } catch (error) {
      console.log("list error");
    } finally {
      console.log("list finally");
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  // -------------------------------//

  useEffect(() => {
    fetchingFiltersLists(urlLists);
  }, []);

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
            {filtersListData.countries.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant="outlined" required>
          <InputLabel id="region">Region</InputLabel>
          <Select labelId="region" id="region" label="region" name="region" value={formSelectedData.region} onChange={(e) => onChangeFormDataHandler(e)}>
            {filtersListData.regions.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item.replaceAll("_", " ")}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant="outlined" required>
          <InputLabel id="municipality">Municipality</InputLabel>
          <Select labelId="municipality" id="municipality" name="municipality" label="Municipality" value={formSelectedData.municipality} onChange={(e) => onChangeFormDataHandler(e)}>
            {filtersListData.municipalities.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className={Styles.divider}>&nbsp;</div>

        <FilterPanel />

        <Button onClick={() => {}} type="btn-primary">
          {limitationListItemError ? "please, remove an item" : "Add municipality"}
          {limitationListItemError ? "" : <AddCircleOutlineRoundedIcon />}
        </Button>
      </ThemeProvider>
    </form>
  );
}

export default SidebarForm;
