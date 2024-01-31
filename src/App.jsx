import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
