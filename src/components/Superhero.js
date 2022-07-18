import { useEffect, useState } from "react";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import axios from "axios";
import React from "react";

const Superhero = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <Container className="py-5" id="superhero">
      <h1 className="text-white text-end mb-4">Superhero Movies</h1>
      <Row className="justify-content-center">
        {movies.map((result, index) => {
          return (
            <Col lg={4} md={6} className="my-3" key={index}>
              <Card className="bg-dark border-4 border-white">
                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} className="img-fluid" />
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.title}</Card.Title>
                  <Card.Text>{result.overview}</Card.Text>
                  <Card.Text className="text-center">Release Date : {result.release_date}</Card.Text>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Superhero;
