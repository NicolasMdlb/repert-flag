import styles from "../styles/navbar.module.css";
import imageWorld from "../assets/images/MapWorldGrey.png";
import { NavLink, Outlet } from "react-router-dom";
import Footer from './Footer';

const NavBar = () => {
  return (
    <>
    <div className="content">
      <header>
        <nav className={styles.navContainer}>
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
            to="/Catalog"
          >
           <span>
              Catalog
            </span>
          </NavLink>
          <NavLink
            className={styles.hvrUnderlineFromCenter}
            to="/Map"
          >
            <span>
              Map
            </span>
          </NavLink>
           
        </nav>
      </header>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default NavBar;
