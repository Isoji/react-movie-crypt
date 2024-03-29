import React from "react";
import "./Footer.scss";
import githubIcon from "../../assets/github-icon.svg";
import emailIcon from "../../assets/email.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <h2>Movie Crypt: A Digital Shop for Movie Lovers</h2>
          <ul>
            <li>
              <a href="mailto:contact@tremblayben.com">
                <img className="mail-img" src={emailIcon} alt="Email"></img>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Isoji"
                rel="noreferrer"
                target="_blank"
              >
                <img className="github-img" src={githubIcon} alt="Github"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
