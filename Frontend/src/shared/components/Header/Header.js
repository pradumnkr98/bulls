import React from "react";
import { Buttons, SingleDropDown } from "..";
import "../../.././assets/index.css";
import { NavLink, Redirect } from "react-router-dom";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({
  authenticated,
}) => {
  let onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="header-top shadow">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="header-top_logo">
          <p>
            Bear<span>Bulls</span>
          </p>
        </div>
      </div>

      <div className="header-top_left">
        <div>
          <NavLink to="/register">
            {!authenticated && <Buttons className="buttons2" value="Sign Up" />}
          </NavLink>
        </div>
        <div>
          <NavLink to="/login">
            {!authenticated && <Buttons className="buttons2" value="Sign In" />}
          </NavLink>
        </div>
        <div style={{ marginRight: "10px" }}>
          <NavLink to="/searchUser">
            {authenticated && (
              <button
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Search People"
                style={{ backgroundColor: "white", border: "none" }}
              >
                <SearchIcon
                  className="navbar-action-icons "
                  style={{ fontSize: 40 }}
                ></SearchIcon>
              </button>
            )}
          </NavLink>
        </div>

        <div style={{ marginRight: "10px" }}>
          <NavLink to="/feeds">
            {authenticated && (
              <button
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Feeds"
                style={{ backgroundColor: "white", border: "none" }}
              >
                <DynamicFeedIcon
                  className="navbar-action-icons "
                  style={{ fontSize: 40 }}
                ></DynamicFeedIcon>
              </button>
            )}
          </NavLink>
        </div>

        <div>
          {authenticated && (
            <SingleDropDown
              item1="View profile"
              item2="Logout"
              href1="/profile"
              onLogout={onLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
