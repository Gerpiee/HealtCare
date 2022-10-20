import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import DispensaryHeader from "./DispensaryHeader";
import ReportsCard from "./ReportsCard";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
const Reports = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <DispensaryHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Item>
              <Link to="/dailysalesreport" style={{ textDecoration: "none" }}>
                <ReportsCard text="User Collection" second="Report" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                to="/narcoticsdailysalesreports"
                style={{ textDecoration: "none" }}
              >
                <ReportsCard text="Narcotics Daily Sales" second="Report" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                to="/usercollectionreports"
                style={{ textDecoration: "none" }}
              >
                <ReportsCard text="Daily Sales Report" second="Report" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                to="/settlementsummaryreport"
                style={{ textDecoration: "none" }}
              >
                <ReportsCard text="Settlement Summary" second="Report" />
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Reports;
