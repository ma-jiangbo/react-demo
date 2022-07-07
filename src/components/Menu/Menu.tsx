import React, { useState } from "react";
import styles from "./Menu.css";
import storage from "@/utils/storage";
import routers from "@/router/baseRouter";
import { Link, RouteObject } from "react-router-dom";
import { getRouteStack } from "@/utils/route";

const Menu: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(!Boolean(storage.get("collapse")));

  const setMenuVisible = () => {
    if (isOpen) {
      setIsOpen(false)
      storage.set('collapse', '1')
    } else {
      setIsOpen(true)
      storage.set('collapse', '')
    }
  }

  const renderMenu = (routerList: RouteObject[], level = 1) => {
    if (!routerList.length) return null;
    return (
      <div className={`${styles[`menuLevel${level}`]} ${styles["menuLevel"]}`}>
        {routerList.map((route) => {
          if (route.path && route.element) {
            const routeStack = getRouteStack(route.path);
            const pathName = routeStack.map((_route) => _route.path).join("/");
            return (
              <Link to={pathName} key={route.path} className={styles.menuItem}>
                {pathName === "/" && "home"}
                {route.path.replace(/(^\/)|(\/)/g, (...arg) =>
                  arg[3] ? "-" : ""
                )}
                {renderMenu(route.children || [], level + 1)}
              </Link>
            );
          }
          return (
            <div key={route.path} className={styles.menuItem}>
              {route.path.replace(/(^\/)|(\/)/g, (...arg) =>
                arg[3] ? "-" : ""
              )}
              {renderMenu(route.children || [], level + 1)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`${styles.menu} ${!isOpen && styles.hideMenu}`}>
      <button className={styles.control} onClick={setMenuVisible}>{isOpen ? "hideMenu" : "showMenu"}</button>
      <h3>MENU</h3>
      {renderMenu(routers)}
    </div>
  );
};

export default Menu;
