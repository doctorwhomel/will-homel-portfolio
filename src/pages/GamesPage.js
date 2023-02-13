import ReactstrapImageGallery from "../components/ReactstrapImageGallery";
import { RENDERS } from "../app/shared/RENDERS";
import { ASSETS } from "../app/shared/ASSETS";

const GamesPage = () => {
  return (
    <div>
      <h5>Renders</h5>
      <ReactstrapImageGallery images={RENDERS} limit={12} />
      <h5>Assets</h5>
      <ReactstrapImageGallery images={ASSETS} limit={12} />
    </div>
  );
};

export default GamesPage;
