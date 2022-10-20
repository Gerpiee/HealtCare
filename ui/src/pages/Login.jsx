import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";

import "../App.css";
import { Checkbox } from "@mui/material";
import { Container } from "@mui/system";

const Login = () => {
  return (
    <div className="container">
      <Grid item xs={4} className="left">
        <div className="bg-i">
          <div className="bg">
            <div className="elements">
              <h1 className="head1">Danphe Emr</h1>
              <p className="healthcare">
                A Complete{" "}
                <b style={{ color: "#00ffa1", fontWeight: "600px" }}>
                  Healthcare Management Solution
                </b>{" "}
                for Hospitals, Clinics and Pharmacy.
              </p>
              <ul className="feature">
                <li>
                  <span>☑</span>EMR
                </li>
                <li>
                  <span>☑</span>ERP
                </li>
                <li>
                  <span>☑</span>Disease Registry
                </li>
                <li>
                  <span>☑</span>Health Information Exchange
                </li>
                <li>
                  <span>☑</span>Syndromic Surveillance
                </li>
                <li>
                  <span>☑</span>Patient Portal
                </li>
              </ul>
            </div>
            <p className="footerl">
              <a href="/" className="footer-link">
                <b style={{ color: "#00ffa1", fontWeight: "600px" }}>
                  Terms & Condition
                </b>
              </a>
              <br></br>
              &copy; Copyright 2022
              <a href="/" className="footer-link">
                <b style={{ color: "#00ffa1", fontWeight: "600px" }}>
                  Danphe EMR. All Rights Reserved.
                </b>
              </a>
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={8} className="right">
        <div className="right-container">
          <img
            className="danpheh"
            src="https://opensource-healthcare.com/themes/theme-default/images/danphe-logo.png"
            alt=""
          />
          <h1
            style={{ fontWeight: "400 ", color: "#777", marginBottom: "10px" }}
          >
            Sign in
          </h1>
          <div className="loginform">
            <div className="textfield">
              <TextField
                placeholder="Username"
                size="small"
                style={{ width: "30%" }}
              />
            </div>
            <div className="textfield">
              <TextField
                placeholder="Password"
                size="small"
                style={{ width: "30%" }}
              />
            </div>
            <div className="remember">
              <Checkbox />
              <label>Remember me?</label>
            </div>
            <br /> <br /> <br />
            <div className="btn-forgot">
              <Container component="main" maxWidth="xs">
                <a href="/" style={{ marginRight: "10%" }}>
                  Forgot password?
                </a>
                <Link to="/home">
                  <button className="signbtn">Sign in</button>
                </Link>
              </Container>
              <p style={{ fontSize: "10px", marginTop: "10px" }}>
                Danphe EMR Version EMR_V1.0.4
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
