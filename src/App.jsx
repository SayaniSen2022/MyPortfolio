import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./utilities/Layout";
import Hero from "./components/Hero";
import Error from "./components/Error";
import About from "./components/About";
import Socials from "./components/Socials";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="socials" element={<Socials />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
