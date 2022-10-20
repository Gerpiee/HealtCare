import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./Patient.css";
import { Link } from "react-router-dom";

const RegisterPatientTop = () => {
  return (
    <>
      <div className="registerp-top">
        <Grid container spacing={2}>
          <Grid item xs={1.5} className="top-grid-ling">
            <Link to="/basicinformation" className="top-link">
              <Typography className="top-rp">Basic Information</Typography>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/address" className="top-link">
              <Typography className="top-rp">Address</Typography>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/guarantor" className="top-link">
              <Typography className="top-rp">Guarantor</Typography>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/insurance" className="top-link">
              <Typography className="top-rp">Insurance</Typography>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/kinemergencycontact" className="top-link">
              <Typography className="top-rp">Kin/Emergency Contact</Typography>
            </Link>
          </Grid>
          <Grid item xs={1} md={3.5}>
            <Link to="/newphoto" className="top-link">
              <CameraAltIcon />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="success" size="small">
              Register Patient
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RegisterPatientTop;
