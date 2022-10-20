import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import "./Dispensary.css";
const ReportsCard = (props) => {
  return (
    <div style={{ marginTop: "7%" }}>
      <Card className="ReportsCard">
        <CardContent>
          <Grid container spacing={1}>
            <Grid sm={2}>
              <TripOriginIcon
                style={{
                  fontSize: "44px",
                }}
              />
            </Grid>
            <Grid sx={2}>
              <Typography variant="h6" sx={{ marginTop: "7%" }}>
                {props.text}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            component="div"
            sx={{ fontSize: 14, marginRight: "58%" }}
            color="text.secondary"
            gutterBottom
          >
            {props.second}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsCard;
