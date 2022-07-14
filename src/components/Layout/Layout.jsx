import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <Header />
        <div className="content-wrap">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
