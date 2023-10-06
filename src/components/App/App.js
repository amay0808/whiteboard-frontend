import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "../Navbar/Navbar";
import Home from "../../Pages/Home";
import Footer from "../Footer/footer";
import ExerciseDetail from "../../Pages/ExerciseDetail";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
