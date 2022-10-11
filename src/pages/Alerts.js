import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Container from "react-bootstrap/Container";

function Alerts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  const getAlertData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${id}`
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
            </Card.Body>
          </Card>
        </>
      );
    });
    return items;
  };

  useEffect(() => {
    getAlertData();
  });

  return <Container>{getAlertCard()}</Container>;
}

export default Alerts;
