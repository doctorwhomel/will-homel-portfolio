import "bootstrap/dist/css/bootstrap.min.css";
import ReactstrapImageGallery from "../components/ReactstrapImageGallery.jsx";
import { VIDEOS } from "../app/shared/VIDEOS.js";

const VideosPage = () => {
  return (
    <div>
      <h5>Video Gallery</h5>
      <ReactstrapImageGallery images={VIDEOS} limit={12} />
    </div>
  );
};

export default VideosPage;
