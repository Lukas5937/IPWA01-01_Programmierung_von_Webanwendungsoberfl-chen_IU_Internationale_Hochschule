import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import rawData from "../../../data/emission-data.json";
import useDataProcessor from "../hooks/useDataProcessor.jsx";
import { generateObjectKey } from "../../../utils/formatStrings.js";

export default function EmissionData() {
  const { sortData, filterData, formatRawData } = useDataProcessor();

  const formattedData = formatRawData(rawData);
  const initialData = sortData(formattedData, "unternehmen");

  const [data, setData] = useState(initialData);

  const [sortSettings, setSortSettings] = useState({
    unternehmen: "asc",
    branche: null,
    land: null,
    kontinent: null,
    emissionen2024: null,
    veraenderungVorjahr: null,
  });

  const [filterSettings, setFilterSettings] = useState({
    unternehmen: "",
    branche: "",
    land: "",
    kontinent: "",
    emissionen2024: "",
    veraenderungVorjahr: "",
  });

  function setNewOrder(criterion) {
    const newOrder = sortSettings[criterion] === "asc" ? "desc" : "asc";

    setSortSettings(() => ({
      unternehmen: null,
      branche: null,
      land: null,
      kontinent: null,
      emissionen2024: null,
      veraenderungVorjahr: null,
      [criterion]: newOrder,
    }));
    return newOrder;
  }

  function sortList(criterion) {
    const newOrder = setNewOrder(criterion);
    console.log("newOrder: ", newOrder);
    setData((prevData) => sortData(prevData, criterion, newOrder));
  }

  function filterList(criterion, value) {
    const newFilterSettings = {
      ...filterSettings,
      [criterion]: value,
    };
    setFilterSettings(newFilterSettings);

    const filtered = filterData(initialData, newFilterSettings);
    setData(filtered);
  }

  function addSortButton(label) {
    const criterion = generateObjectKey(label);
    return (
      <IconButton
        aria-label={
          sortSettings[criterion] === "asc"
            ? `Sortiere ${label} aufsteigend`
            : `Sortiere ${label} absteigend`
        }
        onClick={() => sortList(criterion)}
      >
        {sortSettings[criterion] === "asc" ? (
          <ArrowDownwardIcon
            fontSize="inherit"
            style={{
              color: "#cad5e2",
            }}
          />
        ) : (
          <ArrowUpwardIcon fontSize="inherit" style={{ color: "#cad5e2" }} />
        )}
      </IconButton>
    );
  }

  function getUniqueValues(data, key) {
    const values = [];

    for (const item of data) {
      const value = item[key];
      if (!values.includes(value)) {
        values.push(value);
      }
    }
    const sortedValues = values.sort((a, b) => a.localeCompare(b));
    return sortedValues;
  }

  function addFilterDropDownList(label, width) {
    const name = generateObjectKey(label);
    return (
      <FormControl
        variant="standard"
        sx={{
          minWidth: width,
        }}
      >
        <InputLabel
          id={`select-${name}-label`}
          style={{ color: "#cad5e2", fontWeight: "700" }}
        >
          {label}
        </InputLabel>
        <Select
          labelId={`select-${name}-label`}
          id={`select-${name}`}
          value={filterSettings[name]}
          onChange={(event) => filterList(name, event.target.value)}
          label={label}
        >
          <MenuItem value="">
            <em>Alle anzeigen</em>
          </MenuItem>
          {getUniqueValues(data, name).map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <section className="mx-auto min-h-screen bg-[#2e6061] py-20 pr-4 ltr:pl-12 ltr:xl:pl-56 ltr:2xl:pl-36 rtl:pr-12 rtl:xl:pr-56 rtl:2xl:pr-36">
      <p className="mb-2 mb-8 text-sm text-slate-200 lg:hidden">
        Horizontal scrollen, um alle Inhalte zu sehen.
      </p>
      <div className="w-full overflow-x-auto">
        <table className="mx-auto">
          <thead className="text-slate-300">
            <tr className="border-b border-emerald-100">
              <th scope="col">
                <div className="flex items-end">
                  {addFilterDropDownList("Unternehmen", 126)}
                  {addSortButton("Unternehmen")}
                </div>
              </th>
              <th scope="col">
                <div className="flex items-end">
                  {addFilterDropDownList("Branche", 86)}
                  {addSortButton("Branche")}
                </div>
              </th>
              <th scope="col">
                <div className="flex items-end">
                  {addFilterDropDownList("Land", 60)}
                  {addSortButton("Land")}
                </div>
              </th>
              <th scope="col">
                <div className="flex items-end">
                  {addFilterDropDownList("Kontinent", 98)}
                  {addSortButton("Kontinent")}
                </div>
              </th>
              <th scope="col">
                <div className="mt-4 flex items-center">
                  <span>Emissionen 2024</span>
                  {addSortButton("Emissionen 2024")}
                </div>
              </th>
              <th scope="col">
                <div className="mt-4 flex items-center">
                  <span>Änd. Vorjahr</span>
                  {addSortButton("Veränderung Vorjahr")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-emerald-100">
            {data.map((item) => (
              <tr key={item.unternehmen}>
                <td className="w-44 py-6 pr-4 align-top">{item.unternehmen}</td>
                <td className="w-44 py-6 pr-4 align-top">{item.branche}</td>
                <td className="w-40 py-6 pr-4 align-top">{item.land}</td>
                <td className="w-40 py-6 pr-4 align-top">{item.kontinent}</td>
                <td className="min-w-56 py-6 pr-4 align-top">
                  {Number(item.emissionen2024).toLocaleString()} t CO₂
                </td>
                <td className="min-w-36 py-6 align-top">
                  {item.veraenderungVorjahr} %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
