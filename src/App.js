import "./App.css";
import HomePage from "./conponents/components/HomePage";
import BlogPage from "./conponents/components/BlogPage";
import Header from "./conponents/components/Header";
import SnsPage from "./conponents/components/SnsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<SnsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
