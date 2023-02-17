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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
