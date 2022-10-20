import { useEffect, useState } from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Grid, Paper, Typography } from "@mui/material";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";
import TopTable from "../components/patient/TopTable";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const data = {
  datasets: [
    {
      data: [30, 3, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Male", "Others", "Female"],
};
const databar = [
  { argument: "0-9 Years", value: 15 },
  { argument: "10-19 Years", value: 10 },
  { argument: "20-59 Years", value: 50 },
  { argument: ">= 60 Years", value: 25 },
];
function Home() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [30, 3, 30],
        backgroundColor: ["blue", "gray", "pink"],
      },
    ],
    labels: ["Male", "Others", "Female"],
  });

  return (
    <div className="App">
      <TopTable />
      <Grid container spacing={2} style={{ marginTop: "0.5%" }}>
        <Grid item xs={4} style={{ marginRight: "10px" }}>
          <div className="pieChart">
            <div>
              <Grid container spacing={2}>
                <Grid item xs={1}>
                  <DonutLargeIcon sx={{ color: "#0773bc" }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography>Patient Distribution(Gender wise)</Typography>
                </Grid>
              </Grid>
            </div>
            <Doughnut data={data} />
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginLeft: "10%" }}>
          <div className="barChart">
            <div>
              <Grid container spacing={2}>
                <Grid item xs={1}>
                  <LeaderboardIcon sx={{ color: "#0773bc" }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography>Patients Distribution(Age wise)</Typography>
                </Grid>
              </Grid>
            </div>
            <Paper>
              <Chart data={databar}>
                <ArgumentAxis />
                <ValueAxis />
                <BarSeries valueField="value" argumentField="argument" />
              </Chart>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
