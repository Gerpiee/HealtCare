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
const DailySalesReport = () => {
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
      field: "date",
      headerName: "Date",

      width: 100,
    },
    { field: "type", headerName: "Type", width: 100 },
    { field: "receiptno", headerName: "Receipt No", width: 100 },
    {
      field: "patientname",
      headerName: "Patient Name",
      width: 100,
    },

    {
      field: "subtotal",
      headerName: "Sub Total",
      widt: 100,
    },
    {
      field: "discount",
      headerName: "Discount",
      widt: 100,
    },
    {
      field: "nettotal",
      headerName: "Net Total",
      widt: 100,
    },
    {
      field: "cashcollection",
      headerName: "Cash Collection",
      widt: 100,
    },
    {
      field: "user",
      headerName: "User",
      widt: 100,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      widt: 100,
    },
    {
      field: "counter",
      headerName: "Counter",
      widt: 100,
    },
    {
      field: "store",
      headerName: "Store",
      widt: 100,
    },
  ];

  const rows = [];
  return (
    <div style={{ marginTop: "4%" }}>
      <DispensaryHeader />
      <Typography sx={{ marginTop: "1%" }}>
        User Collection Report (Detailed)
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
              label="Entry Dispensary Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <InputLabel style={{ marginTop: "25%" }}>Counter:</InputLabel>
          </Grid>

          <Grid item xs={3.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={2}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Address Type
                  </InputLabel>
                </Grid>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleSelect}
                  size="small"
                >
                  <MenuItem value={10}>Temporary</MenuItem>
                  <MenuItem value={20}>Permanent</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={0.3} sx={{ marginTop: "1%" }}></Grid>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "7.5%" }}>User Name:</InputLabel>
          </Grid>
          <Grid item xs={4}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Enter User Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
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

export default DailySalesReport;
