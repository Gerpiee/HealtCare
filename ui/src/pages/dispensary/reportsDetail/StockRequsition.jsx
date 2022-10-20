import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import MenuAppList from "../../../components/MenuAppList";
import SearchBar from "../../../components/patient/SearchBar";
import DispensaryHeader from "../DispensaryHeader";

const StockRequsition = () => {
  const columns = [
    {
      field: "transferdate",
      headerName: "Transfer Date",

      width: 130,
    },
    { field: "genericname", headerName: "Generic Name", width: 130 },
    { field: "medicanename", headerName: "Medicane Name", width: 130 },
    {
      field: "batch",
      headerName: "Batch",
      width: 130,
    },

    {
      field: "expirydate",
      headerName: "Expiry Date",
      widt: 130,
    },
    {
      field: "transqty",
      headerName: "Trans Qty",
      widt: 130,
    },
    {
      field: "transferredby",
      headerName: "Transferred By",
      widt: 130,
    },
    {
      field: "targetstore",
      headerName: "Targer Store",
      widt: 130,
    },
    {
      field: "receivedby",
      headerName: "Received By",
      widt: 130,
    },
  ];

  const rows = [];
  return (
    <div style={{ marginTop: "4%" }}>
      <DispensaryHeader />
      <MenuAppList />

      <div style={{ height: "100vh", width: "100%" }}>
        <Button style={{ marginTop: "1%" }} variant="contained">
          Create Requisition
        </Button>
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

export default StockRequsition;
