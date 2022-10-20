import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";
const MenuAppList = () => {
  return (
    <div className="menuAppList">
      <ul>
        <li>
          <Link to="/stockdetailslist" className="stockdetailslink">
            Stock Details List
          </Link>
        </li>
        <li>
          <Link to="/stocktransfer" className="stockdetailslink">
            Transfer
          </Link>
        </li>
        <li>
          <Link to="/stockrequsition" className="stockdetailslink">
            Requsition
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuAppList;
