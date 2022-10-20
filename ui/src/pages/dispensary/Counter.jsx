import React from "react";
import DispensaryHeader from "./DispensaryHeader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Grid } from "@mui/material";
import MiniCard from "./MiniCard";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const Counter = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <DispensaryHeader />
      <Typography sx={{ marginTop: "0.5%" }} variant="h6">
        Counter Selection
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: "1%" }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Item>
              <Link to="/salenew" style={{ textDecoration: "none" }}>
                <MiniCard text="Morining Counter" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link to="/salenew" style={{ textDecoration: "none" }}>
                <MiniCard text="Evening Counter" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link to="/salenew" style={{ textDecoration: "none" }}>
                <MiniCard text="Night Counter" />
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Counter;
