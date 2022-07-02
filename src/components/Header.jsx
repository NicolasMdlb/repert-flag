import styles from "./../styles/header.module.css";
import ImageFlag from "./Card/imageFlag";
import TitleView from './TitleView';

const Header = (props) => {
  return (
    <div className={styles.title}>
      {props.img !== undefined &&
        <ImageFlag imgWidth={props.imgWidth} imgHeight={props.imgHeight} name={props.title} img={props.img}/>
      }
      <TitleView>
        {props.title}
      </TitleView>    
    </div>
  );
};

export default Header;
