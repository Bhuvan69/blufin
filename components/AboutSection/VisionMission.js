import { useState } from "react";
import { Image } from "react-bootstrap";
import styles from "./AboutSection.module.scss";

const VisionMission = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={styles.visionMission}
      role="button"
      onClick={() => setShow(!show)}
    >
      <div className="d-flex align-items-center">
        <Image src={show ? "icons/open.svg" : "icons/close.svg"} />
        <div className={show ? styles.open : styles.close}>{props.title}</div>
      </div>
      {show && <div className={styles.body}>{props.body}</div>}
    </div>
  );
};

export default VisionMission;
