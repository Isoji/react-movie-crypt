import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import logo from "../../assets/app-logo.png";
import classes from "./Header.module.scss";
import Connect from "../Connect/Connect";

const notify = () =>
  toast("Work in progress..", { style: { background: "#ba9511" } });

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (window && !size.width && !size.height) {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const handleWindowReload = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <img
            className={classes.header__content__logo}
            src={logo}
            alt="logo"
          ></img>
          <nav
            className={`${classes.header__content__nav} ${
              menuOpen ? classes.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <Link to="/" onClick={handleWindowReload}>
                  Home
                </Link>
              </li>
              <li>
                <a onClick={notify}>Collection</a>
              </li>
            </ul>
            <Connect />
          </nav>
          <div className={classes.header__content__toggle}>
            {menuOpen ? (
              <AiOutlineClose onClick={menuToggleHandler} />
            ) : (
              <BiMenuAltRight onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
