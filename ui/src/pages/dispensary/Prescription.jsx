import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "../../components/patient/SearchBar";
import DispensaryHeader from "./DispensaryHeader";

const columns = [
  {
    field: "code",
    headerName: "Code",

    width: 150,
  },
  { field: "patientName", headerName: "Patient Name", width: 130 },
  { field: "requestedby", headerName: "Requested By", width: 130 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },

  {
    field: "actions",
    headerName: "Actions",
    widt: 250,
  },
];

const rows = [];

export default function Prescription() {
  return (
    <div>
      <DispensaryHeader />
      <div style={{ height: "100vh", width: "100%" }}>
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
}
