import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import RegisterPatientTop from "../../components/patient/RegisterPatientTop";

import FormControl from "@mui/material/FormControl";
import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";

const KinEmergencyContact = () => {
  return (
    <div>
      <TopTable />
      <RegisterPatientTop />
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "6%" }}>Salutation: </InputLabel>
          </Grid>

          <Grid item xs={1.5}>
            <FormControlLabel control={<Checkbox />} label="KIN" />
          </Grid>
          <Grid item xs={2.5}>
            <FormControlLabel
              control={<Checkbox />}
              label="Emergency Contact"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Both" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>First Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>{" "}
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Last Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>{" "}
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Phone Number: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              type="number"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>{" "}
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Relationship: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Relationship"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>{" "}
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Comments: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Comments"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <Button variant="contained" size="medium">
              Add
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default KinEmergencyContact;
