import { Button } from "@mui/material";
import React from "react";
import RegisterPatientTop from "../../components/patient/RegisterPatientTop";
import AddIcon from "@mui/icons-material/Add";
import DrawerPage from "../../components/drawer/Drawer";
import TopTable from "../../components/patient/TopTable";
const NewPhoto = () => {
  return (
    <div>
      <TopTable />
      <RegisterPatientTop />
      <Button variant="contained">
        <AddIcon />
        New Photo
      </Button>
      <br />

      <img
        src="https://opensource-healthcare.com/themes/theme-default/images/NO_Image.png"
        alt=""
      />
    </div>
  );
};

export default NewPhoto;
