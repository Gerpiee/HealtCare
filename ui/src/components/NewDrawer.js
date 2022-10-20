import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AbcIcon from "@mui/icons-material/Abc";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Address from "../pages/registerPatient/Address";
import BasicInformation from "../pages/registerPatient/BasicInformation";
import Guarantor from "../pages/registerPatient/Guarantor";
import Insurance from "../pages/registerPatient/Insurance";
import KinEmergencyContact from "../pages/registerPatient/KinEmergencyContact";
import NewPhoto from "../pages/registerPatient/NewPhoto";
import SearchPatient from "./patient/SearchPatient";
import RegisterPatientPage from "../pages/RegisterPatientPage";
import Dispensary from "../pages/dispensary/Dispensary";
import Counter from "../pages/dispensary/Counter";
import Prescription from "../pages/dispensary/Prescription";
import Sale from "../pages/dispensary/Sale";
import Stock from "../pages/dispensary/Stock";
import Reports from "../pages/dispensary/Reports";
import "./NewDrawer.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useState } from "react";
import { Tooltip } from "chart.js";
import DailySalesReport from "../pages/dispensary/reportsDetail/DailySalesReport";
import NarcoticsDailySalesReports from "../pages/dispensary/reportsDetail/NarcoticsDailySalesReports";
import SettlementSummaryReport from "../pages/dispensary/reportsDetail/SettlementSummaryReport";
import UserCollectionReports from "../pages/dispensary/reportsDetail/UserCollectionReports";
import SaleNew from "../pages/dispensary/SaleNew";
import StockDetailsList from "../pages/dispensary/reportsDetail/StockDetailsList";
import StockTransfer from "../pages/dispensary/reportsDetail/StockTransfer";
import StockRequsition from "../pages/dispensary/reportsDetail/StockRequsition";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
import TheatersIcon from "@mui/icons-material/Theaters";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReportIcon from "@mui/icons-material/Report";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import NordicWalkingIcon from "@mui/icons-material/NordicWalking";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MasksIcon from "@mui/icons-material/Masks";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaidIcon from "@mui/icons-material/Paid";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PercentIcon from "@mui/icons-material/Percent";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SocialService from "../pages/socialservice/SocialService";
import Verification from "../pages/verification/Verification";
import Vaccination from "../pages/vaccination/Vaccination";
import SystemAdmin from "../pages/systemadmin/SystemAdmin";
import SubStore from "../pages/substore/SubStore";
import Settings from "../pages/settings/Settings.jsx";
import Scheduling from "../pages/scheduling/Scheduling";
import Readiology from "../pages/radiology/Readiology";
import Queuemngmt from "../pages/queuemngmt/Queuemngmt";
import Procurement from "../pages/procurement/Procurement";
import Pharmacy from "../pages/pharmacy/Pharmacy";
import Payroll from "../pages/payroll/Payroll";
import OperationTheatre from "../pages/operationtheatre/OperationTheatre";
import Nursing from "../pages/nursing/Nursing";
import MedicalRecords from "../pages/medicalrecords/MedicalRecords";
import Maternity from "../pages/maternity/Maternity";
import Laboratory from "../pages/laboratory/Laboratory";
import Inventory from "../pages/inventory/Inventory.jsx";
import Incentive from "../pages/incentive/Incentive";
import HelpDesk from "../pages/helpdesk/HelpDesk";
import GovInsurance from "../pages/govinsurance/GovInsurance";
import Fraction from "../pages/fraction/Fraction";
import FixedAssets from "../pages/fixedassets/FixedAssets";
import Emergency from "../pages/emergency/Emergency";
import Doctor from "../pages/doctor/Doctor";
import Cssd from "../pages/cssd/Cssd";
import Billing from "../pages/billing/Billing";
import Appointment from "../pages/appointment/Appointment";
import Adt from "../pages/adt/Adt";
import Accounting from "../pages/accounting/Accounting";
import Logo from "../images/genotip.png";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NewDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const data = [
    { text: "Patient", icon: <PersonAddIcon />, to: "/home" },
    { text: "Dispensary", icon: <LocalHospitalIcon />, to: "/dispensary" },
    {
      text: "Social Service",
      icon: <ElderlyWomanIcon />,
      to: "/socialservice",
    },
    {
      text: "Operation Theatre",
      icon: <TheatersIcon />,
      to: "/operationtheatre",
    },
    { text: "Doctor", icon: <VaccinesIcon />, to: "/doctor" },
    { text: "Appointment", icon: <BookOnlineIcon />, to: "/appointment" },
    { text: "Procurement", icon: <DescriptionIcon />, to: "/procurement" },
    { text: "Billing", icon: <AccountBalanceWalletIcon />, to: "/billing" },
    { text: "Reports", icon: <ReportIcon />, to: "/reports" },
    { text: "Laboratory", icon: <ScienceIcon />, to: "/laboratory" },
    { text: "Radiology", icon: <BiotechIcon />, to: "/radiology" },
    { text: "ADT", icon: <NordicWalkingIcon />, to: "/adt" },
    { text: "Vaccination", icon: <VaccinesIcon />, to: "/vaccination" },
    { text: "QueueMngmt", icon: <Diversity3Icon />, to: "/queuemngmt" },
    { text: "Inventory", icon: <InventoryIcon />, to: "/inventory" },
    { text: "Accounting", icon: <AccountBalanceIcon />, to: "/accounting" },
    { text: "Emergency", icon: <EmergencyShareIcon />, to: "/emergency" },
    { text: "GovInsurance", icon: <LocalPoliceIcon />, to: "/govinsurance" },
    { text: "Maternity", icon: <PregnantWomanIcon />, to: "/maternity" },
    { text: "Helpdesk", icon: <QuestionMarkIcon />, to: "/helpdesk" },
    { text: "Nursing", icon: <FavoriteBorderIcon />, to: "/nursing" },
    { text: "MedicalRecords", icon: <MasksIcon />, to: "/medicalrecords" },
    { text: "Settings", icon: <SettingsIcon />, to: "/settings" },
    {
      text: "SystemAdmin",
      icon: <AdminPanelSettingsIcon />,
      to: "/systemadmin",
    },
    { text: "Pharmacy", icon: <MedicationLiquidIcon />, to: "/pharmacy" },
    { text: "Scheduling", icon: <DateRangeIcon />, to: "/scheduling" },
    { text: "Payroll", icon: <PaidIcon />, to: "/payroll" },
    { text: "SubStore", icon: <LocalConvenienceStoreIcon />, to: "/substore" },
    { text: "CSSD", icon: <ContentCutIcon />, to: "/cssd" },
    { text: "Fraction", icon: <PercentIcon />, to: "/fraction" },
    { text: "Incentive", icon: <PriceCheckIcon />, to: "/incentive" },
    { text: "Verification", icon: <FingerprintIcon />, to: "/verification" },
    { text: "FixedAssets", icon: <ApartmentIcon />, to: "/fixedassets" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img className="mylogo" src={Logo} alt="Logo" />
          <button style={{ marginLeft: "10%" }} className="mybutton">
            <b>EMR_V1.0.4</b>
          </button>
          <Typography className="myadmin">Admin</Typography>
          <QuestionMarkIcon className="myquestion" />
          <NotificationsActiveIcon className="mybell" />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {data.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem component={Link} to={item.to} button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} style={{ color: "black" }} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/address" element={<Address />} />
          <Route path="/basicinformation" element={<BasicInformation />} />
          <Route path="/guarantor" element={<Guarantor />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route
            path="/kinemergencycontact"
            element={<KinEmergencyContact />}
          />
          <Route path="/newphoto" element={<NewPhoto />} />
          <Route path="/searchpatient" element={<SearchPatient />} />
          <Route
            path="/registerpatientpage"
            element={<RegisterPatientPage />}
          />
          <Route path="/dispensary" element={<Dispensary />} />
          <Route path="/counterdispensary" element={<Counter />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dailysalesreport" element={<DailySalesReport />} />
          <Route
            path="/narcoticsdailysalesreports"
            element={<NarcoticsDailySalesReports />}
          />
          <Route
            path="/settlementsummaryreport"
            element={<SettlementSummaryReport />}
          />
          <Route
            path="/usercollectionreports"
            element={<UserCollectionReports />}
          />
          <Route path="/salenew" element={<SaleNew />} />
          <Route path="/stockdetailslist" element={<StockDetailsList />} />
          <Route path="/stocktransfer" element={<StockTransfer />} />
          <Route path="/stockrequsition" element={<StockRequsition />} />
          <Route path="/socialservice" element={<SocialService />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/vaccination" element={<Vaccination />} />
          <Route path="/systemadmin" element={<SystemAdmin />} />
          <Route path="/substore" element={<SubStore />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/radiology" element={<Readiology />} />
          <Route path="/queuemngmt" element={<Queuemngmt />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/operationtheatre" element={<OperationTheatre />} />
          <Route path="/nursing" element={<Nursing />} />
          <Route path="/medicalrecords" element={<MedicalRecords />} />
          <Route path="/maternity" element={<Maternity />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/incentive" element={<Incentive />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/govinsurance" element={<GovInsurance />} />
          <Route path="/fraction" element={<Fraction />} />
          <Route path="/fixedassets" element={<FixedAssets />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/cssd" element={<Cssd />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/adt" element={<Adt />} />
          <Route path="/accounting" element={<Accounting />} />
        </Routes>
      </Box>
    </Box>
  );
}
