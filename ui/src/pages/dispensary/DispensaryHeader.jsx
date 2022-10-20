import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DispensaryHeader = () => {
  return (
    <div className="registerp-top" style={{ marginTop: "4%" }}>
      <Grid container spacing={2}>
        <Grid item xs={1.5} className="top-grid-ling">
          <Link to="/prescription" className="top-link">
            <Typography className="top-rp">Prescription</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/sale" className="top-link" sx={{ marginLeft: "1%" }}>
            <Typography className="top-rp">Sale</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/stock" className="top-link">
            <Typography className="top-rp">Stock</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/counter" className="top-link">
            <Typography className="top-rp">Counter</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/reports" className="top-link">
            <Typography className="top-rp">Reports</Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default DispensaryHeader;
