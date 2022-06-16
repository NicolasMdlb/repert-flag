import styles from "./../styles/header.module.css";

const Header = (props) => {
  return (
    <header className={styles.title}>
      <h1>{props.children}</h1>
    </header>
  );
};

export default Header;
