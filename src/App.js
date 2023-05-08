import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotosPage from "./pages/PhotosPage";
import VideosPage from "./pages/VideosPage";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/photos" element={<PhotosPage />} />
        <Route exact path="/videos" element={<VideosPage />} />
        <Route exact path="/games" element={<GamesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
