import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }
  componentDidMount() {
    this.setState({ activeIndex: this.props.currentIndex });
  }

  next = () => {
    const { animating, activeIndex } = this.state;
    const { images } = this.props;
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const { animating, activeIndex } = this.state;
    const { images } = this.props;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    const { animating } = this.state;
    if (animating) return;
    this.setState({ activeIndex: newIndex });
  };

  setAnimating = (value) => {
    this.setState({
      animating: value,
    });
  };

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;
    let mediaType;
    let media;
    const slides = images.map((image) => {
      if (image.albumId === 2) {
        mediaType = "video";
      }
      if (mediaType === "video") {
        media = (
          <iframe
            src={image.url}
            id="ytplayer"
            type="text/html"
            width="720"
            height="480"
            alt={image.title}
            title={image.title}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      } else {
        media = (
          <img
            src={image.url}
            alt={image.title}
            className="img-fluid mx-auto"
            style={{
              maxHeight: "100vh",
            }}
          />
        );
      }
      return (
        <CarouselItem
          onExiting={() => this.setAnimating(true)}
          onExited={() => this.setAnimating(false)}
          key={image.id}
        >
          <div className="d-flex justify-content-center mx-auto">{media}</div>
        </CarouselItem>
      );
    });
    if (mediaType !== "video") {
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      );
    } else {
      return (
        <div className="d-flex justify-content-center mx-auto">{media}</div>
      );
    }
  }
}

export default ImageCarousel;
