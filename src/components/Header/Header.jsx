import React from "react";
import { useState, useEffect } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

import classes from "./Header.module.scss";

const notify = () => toast("Work in progress..");

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
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
                <a onClick={notify}>Home</a>
              </li>
              <li>
                <a onClick={notify}>Collection</a>
              </li>
            </ul>
            <button onClick={notify}>Connect</button>
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