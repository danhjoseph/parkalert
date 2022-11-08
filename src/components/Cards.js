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
      //for (let key in parkCodes) {";
      // key = deva;
      const response = await fetch(
        // `https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`
        //`https://developer.nps.gov/api/v1/alerts?parkCode=${key}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9`
        `http://127.0.0.1:8000/${numberOfPosts}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getColumnsForRow = () => {
    //console.log(posts);
    let items = posts.map((post, index) => {
      console.log("test");
      console.log(post);
      return (
        <>
          <Col>
            <Card key={post.id}>
              <Card.Body class="text-center">
                <Card.Title>{parkCodes[parse(post.parkCode)]}</Card.Title>
                <Card.Subtitle className="mb-2">
                  {parse(post.title)}
                </Card.Subtitle>
                <Card.Text>{parse(post.description)}</Card.Text>
                <Card.Link>
                  <Link onClick={handleShow}>
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

  useEffect(() => {
    getPostsData();
  }, []);

  // console.log(posts);

  return (
    <Container>
      <Row xs={1} md={columnsPerRow}>
        {getColumnsForRow()}
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save a park to your quick view list.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Save this location to your profile to receive alerts?</p>
          <p>You must be logged in to save a park.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
