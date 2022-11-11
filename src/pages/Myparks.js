import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Container from "react-bootstrap/Container";
import { Modal, Button } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";

/**
 * @returns Card component
 */
function Myparks() {
  // const { id } = useParams();
  const parks = 4;
  const [posts, setPosts] = useState([]);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alertIconStyle = {
    color: "red",
    fontSize: "40px",
    margin: "5px",
  };

  const getAlertData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${parks}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAlertCard = () => {
    let items = posts.map((post, index) => {
      return (
        <>
          <Card key={post.id}>
            <Card.Body class="text-center">
              <Card.Title>{parse(post.title)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">TEST</Card.Subtitle>
              <Card.Text>{parse(post.body)}</Card.Text>
              <IconButton>
                <DeleteForeverIcon
                  style={alertIconStyle}
                  onClick={handleShow}
                />
              </IconButton>
            </Card.Body>
          </Card>
        </>
      );
    });
    return items;
  };

  useEffect(() => {
    getAlertData();
  }, []);

  return (
    <Container>
      {getAlertCard()}
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
    </Container>
  );
}

export default Myparks;
