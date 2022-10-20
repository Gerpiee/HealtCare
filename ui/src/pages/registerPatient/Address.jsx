import {
  Box,
  Button,
  FormGroup,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import RegisterPatientTop from "../../components/patient/RegisterPatientTop";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchPatient from "../../components/patient/SearchPatient";

import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";

const Address = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <TopTable />
      <RegisterPatientTop />

      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Addres Type:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Address Type
                  </InputLabel>
                </Grid>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Temporary</MenuItem>
                  <MenuItem value={20}>Permanent</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Street 1: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Street 1"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Street 2: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Street 2"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Birth Country:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Birth Country{" "}
                  </InputLabel>
                </Grid>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Türkiye</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              District/State:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    District/State
                  </InputLabel>
                </Grid>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Türkiye</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>City: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="City"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Zip Code:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <Button variant="contained" size="medium">
              Add Address
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default Address;
