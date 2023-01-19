import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactstrapImageGallery from "../components/ReactstrapImageGallery.jsx";

const URL = "https://jsonplaceholder.typicode.com/photos";

class PhotosPage extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    axios
      .get(URL)
      .then((res) => this.setState({ images: res.data.slice(0, 20) }));
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <ReactstrapImageGallery images={images} limit={12} />
      </div>
    );
  }
}

render(<PhotosPage />, document.getElementById("root"));

export default PhotosPage;
