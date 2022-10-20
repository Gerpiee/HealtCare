import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TopTable from "../../components/patient/TopTable";
import { Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Dispensary.css";
import { Link } from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Dispensary() {
  return (
    <div style={{ marginTop: "4%" }}>
      <Typography>Select your Dispensary</Typography>
      <Link className="main-dispensary-link" to="/counter">
        <Card sx={{ width: "30%" }} className="card-dispensary">
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2.5%" }}>
              <CardActions>
                <AddCircleIcon
                  className="addcircle"
                  style={{ fontSize: "48px" }}
                />
              </CardActions>
            </Grid>
            <CardContent>
              <Grid item xs={12} style={{ marginTop: "5%" }}>
                <Typography variant="h6" style={{ textAlign: "right" }}>
                  Main Dispensary
                </Typography>
              </Grid>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                dispensary
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Link>
    </div>
  );
}
