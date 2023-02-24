import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Nav,
} from "reactstrap";
import homel_new_logo_raster from "../app/assets/img/homel_new_logo_raster.png";
import jack_o_lantern_render from "../app/assets/img/jack_o_lantern_render.png";
import flavorists_dilemma_will_homel_bellingham_comedy_film from "../app/assets/img/flavorists_dilemma_will_homel_bellingham_comedy_film.jpg";
import pupper from "../app/assets/img/pupper.jpg";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <>
      <Container className="align-items-center container-fluid">
        <Row>
          <Col>
            <CardImg
              className="mx-auto d-block"
              style={{ width: "45vw", paddingTop: "32px" }}
              src={homel_new_logo_raster}
              alt="Will Homel Developer Logo"
            />
          </Col>
        </Row>
        <Row style={{ paddingBottom: "24px" }}>
          <Col>
            <p className="text-center" id="tagline">
              Software Developer and Digital Media Specialist
            </p>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "24px" }}>
          <Col>
            <p className="text-center" id="tagline">
              <em>FASCINATED BY THE CONVERGENCE OF ART AND TECHNOLOGY</em>
            </p>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "48px" }}>
          <Col lg="4">
            <animated.div style={animatedStyle}>
              <Card
                style={{
                  backgroundColor: "#00a99d",
                  marginBottom: "24px",
                }}
              >
                <CardTitle>Games and Animation</CardTitle>
                <NavLink className="nav-link" to="/games">
                  <CardImg
                    src={jack_o_lantern_render}
                    alt="games and animation"
                    style={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                  />
                </NavLink>
                <CardBody>
                  <CardText>3D models, games, demos</CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col lg="4">
            <animated.div style={animatedStyle}>
              <Card
                style={{
                  backgroundColor: "#00a99d",
                  marginBottom: "24px",
                }}
              >
                <CardTitle>Film and Video</CardTitle>
                <NavLink className="nav-link" to="/videos">
                  <CardImg
                    src={flavorists_dilemma_will_homel_bellingham_comedy_film}
                    alt="film and video"
                    style={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                  />
                </NavLink>
                <CardBody>
                  <CardText>short films, promos, social media</CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col lg="4">
            <animated.div style={animatedStyle}>
              <Card
                style={{
                  backgroundColor: "#00a99d",
                  marginBottom: "24px",
                }}
              >
                <CardTitle>Photography</CardTitle>
                <NavLink className="nav-link" to="/photos">
                  <CardImg
                    src={pupper}
                    alt="photography"
                    style={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                  />
                </NavLink>
                <CardBody>
                  <CardText>product photos, animals, plants, etc.</CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
