import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Layout.css";
// import jellyfish from './images/jellyfish_monotone.webp';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="layout-content">
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
};

export default Layout;
