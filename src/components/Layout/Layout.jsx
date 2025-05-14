import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./../Header/Header";
import Routers from "../../router/Routers";
import Footer from './../Footer/Footer';
import FaqSection from "../FaqSection/FaqSection";

const Layout = () => {
  const location = useLocation();
  const hiddenPaths = ["/login", "/register"];

  return (
    <>
      <Header />
      <Routers />
      {!hiddenPaths.includes(location.pathname) && <FaqSection />}
      <Footer />
    </>
  );
};

export default Layout;
