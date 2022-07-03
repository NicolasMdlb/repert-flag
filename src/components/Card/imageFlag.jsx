import styles from "../../styles/Card/imageFlag.module.css";
import Tooltip from "@mui/material/Tooltip";

const ImageFlag = (props) => {
  let styleCss = {
    borderRadius: "0.5em",
    width: props.imgWidth !== undefined ? props.imgWidth : "130px",
    minHeight: props.imgHeight !== undefined ? props.imgHeight : "90px",
    maxHeight: props.imgHeight !== undefined ? props.imgHeight : "90px"
  };

  return (
    <div className={styles.imageRadius}>
      <Tooltip title={props.name}>
        <img style={styleCss} src={props.img} alt="drapeau" />
      </Tooltip>
    </div>
  );
};

export default ImageFlag;
