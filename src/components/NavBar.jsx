import styles from "../styles/navbar.module.css";
import imageWorld from "../assets/images/MapWorldGrey.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className={styles.navContainer}>
        <nav>
          <NavLink
            className={styles.hvrUnderlineFromCenter}
            to="/"
          >
            <img
              className={styles.imageRight}
              src={imageWorld}
              alt="logoMapWorld"
            />
          </NavLink>
          <NavLink
            className={styles.hvrUnderlineFromCenter}
            to="/Countries"
          >
            <span>
              Countries
            </span>
          </NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
