import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Container from "react-bootstrap/Container";
import parkCodes from "../db/parkcodes";

/**
 *
 * @returns Card component
 */
function Alerts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  const getAlertData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/park/${id}`);
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

  return <Container>{getAlertCard()}</Container>;
}

export default Alerts;
