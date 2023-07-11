import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./utilities/Layout";
import Hero from "./components/Hero";
import Error from "./components/Error";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
