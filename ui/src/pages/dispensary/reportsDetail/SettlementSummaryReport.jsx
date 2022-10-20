import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DispensaryHeader from "../DispensaryHeader";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchPatient from "../../../components/patient/SearchPatient";
import SearchBar from "../../../components/patient/SearchBar";
import { DataGrid } from "@mui/x-data-grid";
const SettlementSummaryReport = () => {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [age, setAge] = React.useState("");

  const handleSelect = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const columns = [
    {
      field: "billno",
      headerName: "Bill No",

      width: 100,
    },
    {
      field: "date",
      headerName: "Date",

      width: 100,
    },
    { field: "generic", headerName: "Generic", width: 100 },
    { field: "medicanename", headerName: "Medicane Name", width: 100 },
    {
      field: "patient",
      headerName: "Patient",
      width: 100,
    },

    {
      field: "batchno",
      headerName: "Batch No",
      widt: 100,
    },
    {
      field: "expiry",
      headerName: "Expiry",
      widt: 100,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      widt: 100,
    },
    {
      field: "sp",
      headerName: "SP",
      widt: 100,
    },
    {
      field: "salevalue",
      headerName: "Sale Value",
      widt: 100,
    },
    {
      field: "store",
      headerName: "Store",
      widt: 100,
    },
    {
      field: "counter",
      headerName: "Counter",
      widt: 100,
    },
    {
      field: "user",
      headerName: "User",
      widt: 100,
    },
  ];

  const rows = [];
  return (
    <div style={{ marginTop: "4%" }}>
      <DispensaryHeader />
      <Typography sx={{ marginTop: "1%" }}>
        Daily Sales Summary Report
      </Typography>
      <Box>
        <Grid container spacing={2} sx={{ marginTop: "1%" }}>
          <Grid item xs={0.5} sx={{ marginTop: "1%" }}>
            <Typography>From:</Typography>
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={1}>
                <DesktopDatePicker
                  label="From"
                  inputFormat="MM/DD/YYYY"
                  type="small"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={0.3} sx={{ marginTop: "1%" }}>
            <Typography>To:</Typography>
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={1}>
                <DesktopDatePicker
                  label="To"
                  inputFormat="MM/DD/YYYY"
                  type="small"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={0.3} sx={{ marginTop: "1%" }}>
            <Rating max={1} />
          </Grid>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "7.5%" }}>
              Select Dispensary:
            </InputLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Main Dispensary"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "1%" }}>
            <Button variant="contained" size="medium">
              Show Report
            </Button>
          </Grid>
        </Grid>
      </Box>
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
};

export default SettlementSummaryReport;
