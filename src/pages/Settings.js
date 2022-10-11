import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function Settings() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-sm">
        <div class="wrapper bg-white mt-sm-5">
          <h4 class="pb-4 border-bottom text-center">Account Settings</h4>
          <div class="py-2">
            <div class="row py-2">
              <div class="col-md-6">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  class="bg-light form-control"
                  placeholder="Steve"
                ></input>
              </div>
              <div class="col-md-6 pt-md-0 pt-3">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  class="bg-light form-control"
                  placeholder="Smith"
                ></input>
              </div>
            </div>
            <div class="row py-2">
              <div class="col-md-6">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  class="bg-light form-control"
                  placeholder="steve_@email.com"
                ></input>
              </div>
              <div class="col-md-6 pt-md-0 pt-3">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  class="bg-light form-control"
                  placeholder="+1 213-548-6015"
                ></input>
              </div>
            </div>
            <div class="py-3 pb-4 border-bottom text-center">
              <button class="btn btn-primary me-4" onClick={handleShow}>
                Save Changes
              </button>
              <Link to="/">
                <button class="btn btn-danger me-5">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stay Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Saved Changes to Your Profile!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Settings;
