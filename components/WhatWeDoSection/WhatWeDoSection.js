import {
  faChild,
  faPeopleArrows,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import styles from "./WhatWeDoSection.module.scss";

const WhatWeDoSection = () => {
  const items = [
    {
      icon: faChild,
      title: "Grassroot Program",
      subTitle:
        "Create and foster talent through extensive grassroot level programs",
    },
    {
      icon: faTrophy,
      title: "Nurture Talent",
      subTitle:
        "Nurture talented individuals towards the path of professional success",
    },
    {
      icon: faPeopleArrows,
      title: "Develop Ecosystem",
      subTitle:
        "Develop a comprehensive ecosystem for end-to-end support and long-term success",
    },
  ];
  return (
    <Row className={styles.whatWeDo}>
      {items.map((item) => {
        return (
          <Col sm={12} md={12} lg={4} className={styles.itemCol}>
            <div className={`${styles.iconDiv} rounded-circle`}>
              <FontAwesomeIcon icon={item.icon} size="7x" />
            </div>
            <h3>{item.title}</h3>
            <div className={styles.subTitle}>{item.subTitle}</div>
          </Col>
        );
      })}
    </Row>
  );
};

export default WhatWeDoSection;
