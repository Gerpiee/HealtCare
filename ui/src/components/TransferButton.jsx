import { Button } from "@mui/material";
import React from "react";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
const TransferButton = () => {
  return (
    <div style={{ marginTop: "1%" }}>
      <Button variant="contained">
        New Transfer <TransferWithinAStationIcon />
      </Button>
    </div>
  );
};

export default TransferButton;
