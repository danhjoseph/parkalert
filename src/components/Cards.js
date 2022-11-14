import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import IconButton from "@mui/material/IconButton";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import parkCodes from "../db/parkcodes";

/**
 * @returns Card component
 */
export default function Cards({ numberOfPosts }) {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts, setPosts] = useState([]);
  const columnsPerRow = 3;

  const alertIconStyle = {
    color: "red",
    fontSize: "40px",
    margin: "5px",
  };
  const addIconStyle = {
    color: "blue",
    fontSize: "40px",
    margin: "5px",
  };

  const getPostsData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/${numberOfPosts}`);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getColumnsForRow = () => {
    console.log(posts);
    let items = posts.map((post, index) => {
      return (
        <>
          <Col>
            <Card key={post.id}>
              <Card.Body class="text-center">
                <Card.Title>{parkCodes[parse(post.parkCode)]}</Card.Title>
                <Card.Subtitle className="mb-2 text-warning">
                  {parse(post.category)}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-primary">
                  {parse(post.lastIndexedDate)}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-danger">
                  {parse(post.title)}
                </Card.Subtitle>
                <Card.Text>{parse(post.description)}</Card.Text>
                <Card.Link>
                  <Link to={{ pathname: `myparks/${post.parkCode}` }}>
                    <IconButton>
                      <AddLocationIcon style={addIconStyle} />
                    </IconButton>
                  </Link>
                  <Link
                    to={{
                      pathname: `alerts/${post.parkCode}`,
                    }}
                  >
                    <IconButton>
                      <NotificationImportantIcon style={alertIconStyle} />
                    </IconButton>
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    });
    return items;
  };

  const getModal = () => {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save Park?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to save this park to your list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <Container>
      <Row xs={1} md={columnsPerRow}>
        {getColumnsForRow()}
      </Row>
      {getModal()}
    </Container>
  );
}
