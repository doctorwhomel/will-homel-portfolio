import { Container, Row, Col } from "reactstrap";
import instaIcon from "../app/assets/img/5282544_camera_instagram_social-media_social-network_instagram-logo_icon.png";
import linkedInIcon from "../app/assets/img/5282542_linkedin_network_social-network_linkedin-logo_icon.png";
import tubeIcon from "../app/assets/img/5282548_play_player_video_youtube_youtuble-logo_icon.png";

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
              className="btn btn-social-icon"
              href="https://www.instagram.com/majesticsquonk/"
            >
              <img src={instaIcon} alt="Instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon"
              href="https://www.linkedin.com/in/will-homel/"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>{" "}
            <a
              className="btn btn-social-icon"
              href="https://www.youtube.com/@willhomel933"
            >
              <img src={tubeIcon} alt="Youtube" />
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
          &copy; Will Homel 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
