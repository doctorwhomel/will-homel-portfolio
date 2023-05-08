import ReactstrapImageGallery from "../components/ReactstrapImageGallery";
import { RENDERBREAKDOWN } from "../app/shared/RENDERBREAKDOWN";
import { RENDERS } from "../app/shared/RENDERS";
import { ASSETS } from "../app/shared/ASSETS";
import { GAMEVIDEOS } from "../app/shared/GAMEVIDEOS";

const GamesPage = () => {
  return (
    <div>
      <h5>Cutscenes and Gameplay</h5>
      <ReactstrapImageGallery images={GAMEVIDEOS} limit={12} />
      <h5>Render Breakdown</h5>
      <ReactstrapImageGallery images={RENDERBREAKDOWN} limit={12} />
      <h5>Renders</h5>
      <ReactstrapImageGallery images={RENDERS} limit={12} />
      <h5>Assets</h5>
      <ReactstrapImageGallery images={ASSETS} limit={12} />
      <h5>
        Have a closer look at my models on{" "}
        <a
          className="h5link"
          href="https://sketchfab.com/majesticsquonk/models"
        >
          Sketchfab
        </a>
        .
      </h5>
    </div>
  );
};

export default GamesPage;
