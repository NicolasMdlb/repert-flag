import styles from "../../styles/Card/imageFlag.module.css";
import Tooltip from "@mui/material/Tooltip";

const ImageFlag = (props) => {
  return (
    <div className={styles.imageRadius}>
      <Tooltip title={props.name}>
        <img src={props.img} alt="drapeau" />
      </Tooltip>
    </div>
  );
};

export default ImageFlag;
