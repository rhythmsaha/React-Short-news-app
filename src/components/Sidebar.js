import React, { useState } from "react";
import classes from "./styles/Sidebar.module.css";
import Categories from "../Categories";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  const sidebarClass = isSidebarOpen
    ? `${classes.Sidebar} ${classes.Sidebar_Open}`
    : classes.Sidebar;

  const togglerClass = isSidebarOpen
    ? `${classes.menuIcon} ${classes.menuIcon_Open}`
    : classes.menuIcon;

  return (
    <>
      <button className={togglerClass} onClick={toggleSidebarHandler}>
        <img
          src="https://img.icons8.com/material-sharp/24/000000/menu--v1.png"
          alt="icon"
        />
      </button>
      <aside className={sidebarClass}>
        <div>Categories</div>
        <ul classes={classes.Category__Container}>
          {Categories.map((category) => (
            <li key={category.id}>
              <Link to={category.link}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
