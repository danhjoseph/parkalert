import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Container from "react-bootstrap/Container";
import { Modal, Button } from "react-bootstrap";

/**
 * @returns Card component
 */
function Myparks() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alertIconStyle = {
    color: "red",
    fontSize: "40px",
    margin: "5px",
  };

  const getAddressData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/address/${id}`);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAlertCard = () => {
    let items = posts.map((post, index) => {
      console.log(post);
      return (
        <>
          <Card key={post.id}>
            <Card.Body class="text-center">
              <Card.Title>{parse(post.fullName)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {parse(post.url)}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {parse(post.latLong)}
              </Card.Subtitle>
              <Card.Text>{parse(post.description)}</Card.Text>
              <Card.Text>{parse(post.directionsInfo)}</Card.Text>
              <Card.Text>{parse(post.weatherInfo)}</Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    });
    return items;
  };

  const getModal = () => {
    return (
      <>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Stay Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this park?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  useEffect(() => {
    getAddressData();
  }, []);

  return (
    <Container>
      {getAlertCard()} {getModal()}
    </Container>
  );
}

export default Myparks;
