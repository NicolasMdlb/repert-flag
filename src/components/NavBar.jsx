import styles from "../styles/navbar.module.css";
import imageWorld from "../assets/images/MapWorldGrey.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className={styles.navContainer}>
        <nav>
            <NavLink to="/">
              <img
                className={styles.imageRight}
                src={imageWorld}
                alt="logoMapWorld"
              />
            </NavLink>
            <NavLink to="/Countries">Countries</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
