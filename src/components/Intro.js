import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="d-flex justify-content-end align-items-end h-50">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4">
              <Button variant="dark">Lihat semua film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
