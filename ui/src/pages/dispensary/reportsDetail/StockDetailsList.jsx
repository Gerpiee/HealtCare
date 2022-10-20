import { Checkbox, FormControlLabel } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import MenuAppList from "../../../components/MenuAppList";
import SearchBar from "../../../components/patient/SearchBar";
import DispensaryHeader from "../DispensaryHeader";

const StockDetailsList = () => {
  const columns = [
    {
      field: "genericname",
      headerName: "Generic Name",

      width: 150,
    },
    { field: "medicanename", headerName: "Medicane Name", width: 130 },
    { field: "batchno", headerName: "Batch No", width: 130 },
    {
      field: "expirydate",
      headerName: "Expriy Date",
      width: 200,
    },

    {
      field: "availableauanity",
      headerName: "Available Quanity",
      widt: 500,
    },
    {
      field: "sprice",
      headerName: "S.Price",
      widt: 300,
    },
  ];

  const rows = [];
  return (
    <div style={{ marginTop: "4%" }}>
      <DispensaryHeader />
      <MenuAppList />
      <div style={{ height: "100vh", width: "100%" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Show Zero Quantity"
          style={{ marginTop: "1%" }}
        />

        <SearchBar />

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[9]}
          Button
        />
      </div>
    </div>
  );
};

export default StockDetailsList;
