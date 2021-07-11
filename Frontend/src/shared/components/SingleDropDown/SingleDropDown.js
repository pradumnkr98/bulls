import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";

const SingleDropDown = ({ item1, item2, href1, href2, onLogout }) => {
  return (
    <div>
      <div class="dropdown">
          <AccountCircleIcon
            className="dropdown-toggle navbar-action-icons "
            style={{fontSize: "40" }}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></AccountCircleIcon>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <AssignmentIndIcon />
              <a
                class="dropdown-item"
                href={href1}
                style={{ marginTop: "-3px" }}
              >
                {item1}
              </a>
            </div>
          </li>
          <li>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ExitToAppIcon></ExitToAppIcon>
              <a
                onClick={onLogout}
                class="dropdown-item"
                style={{ marginTop: "-3px" }}
              >
                {item2}
              </a>
            </div>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleDropDown;
