import Link from "next/link";
import styles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <style jsx>
        {`
          li:hover {
            color: #57abdb;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
