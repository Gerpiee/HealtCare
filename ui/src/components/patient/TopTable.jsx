import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Patient.css";
const TopTable = () => {
  return (
    <>
      <div className="my-grids" style={{ marginTop: "4%" }}>
        <Grid container spacing={2}>
          <Grid item xs={0.4}>
            <div className="home-icon">
              <Link to="/home">
                <HomeIcon className="homeicons" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={1.4}>
            <Link to="/searchPatient" style={{ textDecoration: "none" }}>
              <Typography className="t-p">Search Patient</Typography>
            </Link>
          </Grid>
          <Grid item xs={1.5}>
            <Link to="/registerpatientpage" style={{ textDecoration: "none" }}>
              <Typography className="t-p">Register Patient</Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TopTable;

/* <div className="top-elements">
        <ul>
          <li>
            <HomeIcon className="home-icon" />
          </li>

          <li>
            <Typography>
              <a href="searchpatient">Search Patient</a>
            </Typography>
          </li>
          <li>
            <Typography>
              <a href="registerpatient"> Register Patient</a>
            </Typography>
          </li>
        </ul>

        <div className="top-table">
          <Typography
            style={{
              position: "absolute",
              right: "10%",
              top: "12%",
            }}
          >
            Showing 200 / 200 results
          </Typography>
          <Button
            variant="contained"
            style={{ position: "absolute", right: "2%", top: "11%" }}
          >
            Print
          </Button>
        </div>
      </div> */
