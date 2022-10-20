import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import RegisterPatientTop from "../../components/patient/RegisterPatientTop";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/system";
import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";

const Guarantor = () => {
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
            <InputLabel style={{ marginTop: "10%" }}>Street 1: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Street 1"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Street 2: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Street 2"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}> Country:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    Country{" "}
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
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>
              District/State:
            </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <Box>
              <FormControl fullWidth style={{ marginTop: "2%" }}>
                <Grid item xs={4.8}>
                  <InputLabel id="demo-simple-select-label" size="small">
                    District/State
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
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>City: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="City"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Zip Code:</InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <InputLabel>Relationship Patient: </InputLabel>
          </Grid>
          <Grid item xs={3.35} style={{ marginTop: "0.2%" }}>
            <TextField
              id="outlined-basic"
              label="Relationship"
              variant="outlined"
              size="small"
              style={{ marginTop: "3%" }}
            />
          </Grid>

          <Grid item xs={0.5} style={{ marginTop: "2%" }}>
            <InputLabel>OR </InputLabel>
          </Grid>
          <Grid item xs={0.5} style={{ marginTop: "1%" }}>
            <FormControlLabel control={<Checkbox />} />
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>Self </InputLabel>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Name: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "6%" }}>Gender: </InputLabel>
          </Grid>

          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Male" />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Female" />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox />} label="Other" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <InputLabel style={{ marginTop: "10%" }}>Phone Number: </InputLabel>
          </Grid>
          <Grid item xs={4.8}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              style={{ marginTop: "2%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1.92} style={{ marginTop: "2%" }}>
            <InputLabel>Date Of Birth: </InputLabel>
          </Grid>
          <Grid item xs={5.75}>
            <FormControl sx={{ m: 1, minWidth: "83%" }}>
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  style={{ marginTop: "2%" }}
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  size="small"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <Button variant="contained" size="medium">
              Save
            </Button>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "2%" }}>
            <InputLabel>Relationship Patient: </InputLabel>
          </Grid>
          <Grid item xs={2} style={{ marginTop: "0.2%" }}>
            <TextField
              id="outlined-basic"
              label="Relationship"
              variant="outlined"
              size="small"
              style={{ marginTop: "3%" }}
            />
          </Grid>

          <Grid item xs={0.5} style={{ marginTop: "2%" }}>
            <InputLabel>OR </InputLabel>
          </Grid>
          <Grid item xs={0.5} style={{ marginTop: "1%" }}>
            <FormControlLabel control={<Checkbox />} />
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>Self </InputLabel>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>Street 1: </InputLabel>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <TextField
                id="outlined-basic"
                label="Street 1"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1.91} style={{ marginTop: "2%" }}>
            <InputLabel>Name: </InputLabel>
          </Grid>
          <Grid item xs={4.1} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "83%" }}>
              <TextField
                id="outlined-basic"
                label="Name "
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>Street 2: </InputLabel>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <TextField
                id="outlined-basic"
                label="Street 2"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} style={{ marginTop: "1.8%" }}>
            <InputLabel>Gender:</InputLabel>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "1%" }}>
            <Grid item xs={1} style={{ marginTop: "1%" }}>
              <FormControlLabel control={<Checkbox />} label="Male" />
            </Grid>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "1%" }}>
            <Grid item xs={1} style={{ marginTop: "1%" }}>
              <FormControlLabel control={<Checkbox />} label="Female" />
            </Grid>
          </Grid>
          <Grid item xs={2} style={{ marginTop: "1%" }}>
            <Grid item xs={2} style={{ marginTop: "1%" }}>
              <FormControlLabel control={<Checkbox />} label="Other" />
            </Grid>
          </Grid>

          <Grid item xs={0.94} style={{ marginTop: "2%" }}>
            <InputLabel>Country: </InputLabel>
          </Grid>
          <Grid item xs={2} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "80%" }}>
              <Grid item xs={8} style={{ marginTop: "0.2%" }}>
                <FormControl sx={{ m: 1, minWidth: "390%" }}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Country"
                    size="small"
                  >
                    <MenuItem value={10}>Türkiye</MenuItem>
                    <MenuItem value={21}>USA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1.91} style={{ marginTop: "2%" }}>
            <InputLabel>Phone Number: </InputLabel>
          </Grid>
          <Grid item xs={4.1} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "83%" }}>
              <TextField
                id="outlined-basic"
                label="Phone Number "
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>State : </InputLabel>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1.91} style={{ marginTop: "2%" }}>
            <InputLabel>Date Of Birth: </InputLabel>
          </Grid>
          <Grid item xs={4.1}>
            <FormControl sx={{ m: 1, minWidth: "83%" }}>
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  style={{ marginTop: "2%" }}
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  size="small"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </FormControl>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>City : </InputLabel>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1.91} style={{ marginTop: "2%" }}>
            <Button variant="contained">Save</Button>
          </Grid>
          <Grid item xs={4.1} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "83%" }}></FormControl>
          </Grid>
          <Grid item xs={1} style={{ marginTop: "2%" }}>
            <InputLabel>Zip Code : </InputLabel>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "0.2%" }}>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid> */}
      </FormGroup>
    </div>
  );
};

export default Guarantor;
