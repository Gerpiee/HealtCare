import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import "./Patient.css";
import InputBase from "@mui/material/InputBase";
import { Button, Grid, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={9}>
          <div className="search-bar">
            <Search
              style={{
                border: "1px solid",
                width: "40%",
                marginTop: "2%",
              }}
            >
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </Grid>
        <Grid item xs={2.1}>
          <div className="showing">
            <Typography>Showing 200 / 200</Typography>
          </div>
        </Grid>
        <Grid item xs={0.5}>
          <div className="sprintbtn">
            <Button variant="contained" size="small">
              Print
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
