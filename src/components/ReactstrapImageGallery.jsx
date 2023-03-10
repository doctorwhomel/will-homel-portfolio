import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Container,
  Card,
  CardImgOverlay,
  CardImg,
} from "reactstrap";

import ImageCarousel from "./ImageCarousel";

class ReactstrapImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false, // state for the modal popup
      images: [], // images array we receive from the parent
      imagesToShow: 0, // limit
      currentIndex: 0, // used for the carousel
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { images, limit } = props;
    const imagesToShow = props.hasOwnProperty("limit") ? limit : 6;
    return { images, imagesToShow };
  }

  // for toggling the modal state
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  // used to set the current index of the carousel
  showModalImage = (imageId) => {
    this.toggleModal();
    this.setState({
      currentIndex: imageId,
    });
  };

  render() {
    const { isModalOpen, images, imagesToShow, currentIndex } = this.state;
    const tempImagesArray = images.slice(0, imagesToShow); //temporary array
    const hasMore = images.length !== 0 ? images.length - imagesToShow : 0;
    const typeMd = images.length < 8 ? "6" : "3";
    console.log(typeMd);

    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} className="thumbnail-gallery">
            <Row style={{ padding: "0px", margin: "0px" }}>
              {tempImagesArray.map((image, index) => (
                <Col
                  xs={6}
                  md={typeMd}
                  className="m-0 p-0"
                  key={index}
                  onClick={() => this.showModalImage(index)}
                >
                  <Card
                    className="image-card rounded-0"
                    style={{ backgroundColor: "black", cursor: "pointer" }}
                  >
                    <CardImg src={image.thumbnailUrl} className="rounded-0" />
                    {hasMore !== 0 && index === imagesToShow - 1 ? (
                      <CardImgOverlay className="overlay">
                        <h2 className="mb-0">{hasMore}</h2>
                        <small> More </small>
                      </CardImgOverlay>
                    ) : null}
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Modal
          className="modal-xl"
          isOpen={isModalOpen}
          toggle={this.toggleModal}
          style={{
            borderRadius: "0px 0px 5px 5px",
          }}
        >
          <ModalHeader
            style={{
              backgroundColor: "#00a99d",
              border: "none",
              maxHeight: "48px",
            }}
            toggle={() => this.toggleModal()}
          ></ModalHeader>
          <ModalBody
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              borderRadius: "0px 0px 2px 2px",
            }}
          >
            <Row>
              <Col md="12">
                <ImageCarousel images={images} currentIndex={currentIndex} />
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default ReactstrapImageGallery;
