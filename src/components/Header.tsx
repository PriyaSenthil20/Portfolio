import React from "react";
import "bulma/css/bulma.min.css";

type HeaderProps = {
  title: string;
  links: { label: string; href: string }[];
};

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header id="navbar" className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title has-text-white-light">{title}</h1>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end"  >
          {links.map((link, index) => (
            <a key={index} id="navbar-item" className="navbar-item has-text-white-light" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
