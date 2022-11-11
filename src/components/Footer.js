import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

/**
 *
 * @returns Footer component
 */
function Footer() {
  const iconStyle = {
    color: "black",
    fontSize: "30px",
    margin: "10px",
  };
  const sendEmail = (e) => {
    e.preventDefault();
    window.location = "mailto:help@parkalert.com";
  };
  return (
    <>
      <div
        className="bottom"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Navbar>
          <Container>
            <NavbarBrand className="text-center">
              <IconButton>
                <ForumIcon onClick={sendEmail} style={iconStyle} />
              </IconButton>
              <br />
              <p>Contact Support</p>
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Footer;
