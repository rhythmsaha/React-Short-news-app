import React from "react";
import Sidebar from "./Sidebar";
import classes from "./styles/Header.module.css";
import LogoIcon from "../assets/images/logo_inshorts.png";

const Header = () => {
  return (
    <header className={classes.Header}>
      <Sidebar />
      <span className={classes.Logo}>
        <img src={LogoIcon} alt="Inshorts" />
      </span>
    </header>
  );
};

export default Header;
