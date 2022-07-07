import React, { ReactNode } from "react";
import Menu from "@/components/Menu";
import styles from "./index.css";
import { useLocation } from "react-router-dom";

const BasicLayout: React.FC<{ children: ReactNode | ReactNode[] }> = (
  props
) => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Menu />
      <main>
        <header>
          <h2>
            {location.pathname === "/"
              ? "home"
              : location.pathname.replace(/(^\/)|(\/)/g, (...arg) =>
                  arg[3] ? "-" : ""
                )}
          </h2>
        </header>
        <div className={styles.page}>{props.children}</div>
      </main>
    </div>
  );
};

export default BasicLayout;
