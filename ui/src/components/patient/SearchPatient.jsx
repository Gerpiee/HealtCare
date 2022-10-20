import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "./SearchBar";
import TopTable from "./TopTable";

const columns = [
  {
    field: "hospitalNumber",
    headerName: "Hospital Number",

    width: 150,
  },
  { field: "patientName", headerName: "Patient Name", width: 130 },
  { field: "ageSex", headerName: "Age / Sex", width: 130 },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    widt: 250,
  },
  {
    field: "click",
    headerName: "Click",
    width: 90,
    renderCell: (params) => {
      // you will find row info in params
      <button>Click</button>;
    },
  },
];

const rows = [
  {
    id: 1,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
    click: <button>Hello</button>,
  },
  {
    id: 2,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 3,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 4,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 5,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 6,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 7,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 8,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
  {
    id: 9,
    hospitalNumber: 12313123123,
    patientName: "Patient",
    ageSex: "12 Y/M",
    address: "istanbul Turkey",
    phone: 123123213,
    actions: null,
  },
];

export default function SearchPatient() {
  return (
    <>
      <TopTable />
      <SearchBar />
      <div style={{ height: "100vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[9]}
          Button
        />
      </div>
    </>
  );
}
