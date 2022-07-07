import React, { useState } from "react";
import styles from "./Menu.css";
import storage from "@/utils/storage";
import routers from "@/router/baseRouter";
import { Link, RouteObject } from "react-router-dom";

const Menu: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(Boolean(storage.get("collapse")));

  const renderMenu = (routerList: RouteObject[], level = 1) => {
    if (!routerList.length) return null
    return (
      <div className={`${styles[`menuLevel${level}`]} ${styles['menuLevel']}`}>
        {routerList.map((route) => {
          if (route.path && route.element) {
            return (
              <Link to={route.path} key={route.path}>
                {route.path === '/' && 'home'}
                {route.path.replace(/(^\/)|(\/)/g, (...arg) => arg[3] ? "-" : "")}
                {renderMenu(route.children || [], level + 1)}
              </Link>
            );
          }
          return (
            <span key={route.path}>
                {route.path.replace(/(^\/)|(\/)/g, (...arg) => arg[3] ? "-" : "")}
                {renderMenu(route.children || [], level + 1)}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.menu}>
      <div className={styles.collapse}>{isOpen ? "关闭" : "展开"}</div>
      {renderMenu(routers)}
    </div>
  );
};

export default Menu;
