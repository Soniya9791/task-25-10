import React from "react";
import Header from "./Pages/00-Header/Header";
import Footer from "./Pages/01-Footer/Footer";
import Homemain from "./Pages/05-Home/Homemain";
import Men from "./Pages/02-Men/Men";
import Women from "./Pages/03-Women/Women";
import Profie from "./Pages/04-Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/profile" element={<Profie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
