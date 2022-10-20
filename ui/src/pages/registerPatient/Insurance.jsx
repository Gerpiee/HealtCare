import { Button, FormGroup, Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import RegisterPatientTop from "../../components/patient/RegisterPatientTop";

import FormControl from "@mui/material/FormControl";
import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";

const Insurance = () => {
  return (
    <div>
      <TopTable />
      <RegisterPatientTop />
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Insurance Provider:{" "}
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Insurance Provider"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Insurance Name:{" "}
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Insurance Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Card Number [NSTC No]:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Card Number [NSTC No]"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Insurance Number [NSSI No.]:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Insurance Number [NSSI No.]"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>IMIS Code: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="IMIS Code"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Initial Balance:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Initial Balance"
              variant="outlined"
              size="small"
              type="number"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <Button variant="contained" size="medium">
              Add Insurance
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default Insurance;
