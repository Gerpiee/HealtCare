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
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const MiniCard = (props) => {
  return (
    <div>
      <Card className="minicard">
        <CardContent>
          <Grid container spacing={1}>
            <Grid sm={2}>
              <EngineeringIcon
                style={{
                  fontSize: "44px",
                  marginTop: "20%",
                }}
              />
            </Grid>
            <Grid sx={4}>
              <Typography variant="h6" sx={{ marginTop: "10%" }}>
                {props.text}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            component="div"
            sx={{ fontSize: 14, marginRight: "44%" }}
            color="text.secondary"
            gutterBottom
          >
            Click To Active
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiniCard;
