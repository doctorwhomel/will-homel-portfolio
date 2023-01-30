import "bootstrap/dist/css/bootstrap.min.css";
import ReactstrapImageGallery from "../components/ReactstrapImageGallery.jsx";
import { IMAGES } from "../app/shared/IMAGES.js";

const PhotosPage = () => {
  return (
    <div>
      <h5>Photo Gallery</h5>
      <ReactstrapImageGallery images={IMAGES} limit={12} />
    </div>
  );
};

export default PhotosPage;
