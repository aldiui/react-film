import { Card, Container, Col, Row, Image } from "react-bootstrap";
import thorImage from "../assets/img/Trending/thor.jpg";

const Trending = () => {
  return (
    <Container className="py-5" id="trending">
      <h1 className="text-white text-end mb-4">Trending Movies</h1>
      <Row className="justify-content-center">
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
        <Col lg={4} md={6} className="my-2">
          <Card className="bg-dark border-4 border-white">
            <Image src={thorImage} alt="Card image" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">THOR LOVE AND THUNDER</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
