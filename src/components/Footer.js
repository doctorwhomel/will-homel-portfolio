import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col className="text-center">
            <h5
              className="nav-label"
              style={{ marginTop: "24px", color: "rgb(183, 183, 183)" }}
            >
              Social
            </h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/doctorwhomel/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://linkedin.com/willhomel"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="https://www.youtube.com/@willhomel933"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
        </Row>
        <p
          style={{
            marginTop: "24px",
            marginBottom: "0px",
            paddingBottom: "24px",
            color: "rgb(183, 183, 183)",
          }}
          color="red"
        >
          Will Homel 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
