import styles from "./CommonHeader.module.scss";

const CommonHeader = (props) => {
  return (
    <div className={styles.CommonHeader}>
      <div
        className={`${props.white ? styles.subHeaderWhite : ""} ${
          styles.subHeader
        }`}
      >
        {props.subHeader}
      </div>
      <div
        className={`${props.white ? styles.headerWhite : ""} ${styles.header}`}
      >
        {props.header}
      </div>
    </div>
  );
};

export default CommonHeader;
