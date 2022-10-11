import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/parkalert.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SettingsIcon from "@mui/icons-material/Settings";

function Header({ backButton }) {
  const navigate = useNavigate();
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    justifyContent: "space-between",
    borderBottom: "50px solid white",
  };
  const iconStyle = {
    color: "black",
    fontSize: "40px",
    margin: "10px",
  };

  return (
    <div style={headerStyle}>
      {backButton ? (
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosIcon fontSize="large" style={iconStyle} />
        </IconButton>
      ) : (
        <Link to="/myparks">
          <IconButton>
            <LocationOnIcon fontSize="large" style={iconStyle} />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <img id="header_logo" src={logo} alt="logo" />
      </Link>

      <Link to="/settings">
        <IconButton>
          <SettingsIcon fontSize="large" style={iconStyle} />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
