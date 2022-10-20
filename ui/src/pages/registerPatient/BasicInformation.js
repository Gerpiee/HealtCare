import React from "react";

import RegisterPatientTop from "../../components/patient/RegisterPatientTop";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, Grid, InputLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";

const BasicInformation = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <TopTable />
      <RegisterPatientTop />
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "6%" }}>Salutation: </InputLabel>
          </Grid>

          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Mr" />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Ms" />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Mrs" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>First Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Middle Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Middle Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "8%" }}>Last Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Date Of Birth:{" "}
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                style={{ marginTop: "2%" }}
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Age:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
              type={"number"}
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Land Number:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              id="outlined-basic"
              sx={{ width: "100%" }}
              label="LandLine Number"
              variant="outlined"
              type={"number"}
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Country:</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Country
                  </InputLabel>
                </Grid>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Türkiye</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                  <MenuItem value={30}>England</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={0.8}>
            <InputLabel style={{ marginTop: "20%" }}>Email:</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              type={"email"}
              style={{ marginTop: "4%" }}
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              District/State:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  size="small"
                ></InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="demo-simple-select-label"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Türkiye</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                  <MenuItem value={30}>England</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Address:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Blood group:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <InputLabel id="demo-simple-select-label" size="small">
                  Blood group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Türkiye</MenuItem>
                  <MenuItem value={20}>USA</MenuItem>
                  <MenuItem value={30}>England</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Gender: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                  style={{ marginTop: "2%" }}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Membership:</InputLabel>
          </Grid>
          <Grid item xs={4.8} style={{}}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <InputLabel id="demo-simple-select-label" size="small">
                  General(0%)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Bod (100%)</MenuItem>
                  <MenuItem value={20}>Card Only (89%)</MenuItem>
                  <MenuItem value={30}>Disability (0%)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Caste/Ethnic Group:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box style={{ marginTop: "2%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  General(0%)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Bod (100%)</MenuItem>
                  <MenuItem value={20}>Card Only (89%)</MenuItem>
                  <MenuItem value={30}>Disability (0%)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "8%" }}>Marital Status:</InputLabel>
          </Grid>
          <Grid item xs={1}>
            <FormControlLabel
              control={<Checkbox />}
              label="Married"
              style={{ marginTop: "10%" }}
            />
          </Grid>
          <Grid item xs={1}>
            <FormControlLabel
              control={<Checkbox />}
              label="Unmarried"
              style={{ marginTop: "10%" }}
            />
          </Grid>
          <Grid item xs={1.8}>
            <InputLabel style={{ marginTop: "10%" }}>Notifications:</InputLabel>
          </Grid>
          <Grid item xs={1}>
            <FormControlLabel
              control={<Checkbox />}
              label="Yes"
              style={{ marginTop: "10%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Employer Info:{" "}
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Employer Info"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Occupation:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Occupation"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Race:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Race"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>PAN Number:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Pan Number"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              Dialysis Patient:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <FormControlLabel
              control={<Checkbox />}
              label="Yes"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default BasicInformation;
