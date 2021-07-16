import { Fragment } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
