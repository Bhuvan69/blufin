import {
  faChild,
  faPeopleArrows,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Container } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./WhatWeDoSection.module.scss";

const WhatWeDoSection = () => {
  const items = [
    {
      icon: "icons/grassroot.svg",
      title: "Grassroot Program",
      subTitle:
        "Create and foster talent through extensive grassroot level programs",
    },
    {
      icon: "icons/nurture.svg",
      title: "Nurture Talent",
      subTitle:
        "Nurture talented individuals towards the path of professional success",
    },
    {
      icon: "icons/ecosystem.svg",
      title: "Develop Ecosystem",
      subTitle:
        "Develop a comprehensive ecosystem for end-to-end support and long-term success",
    },
  ];
  return (
    <div className={styles.whatWeDo}>
      <Container className={styles.content}>
        <div className="mt-5 mb-5">
          <CommonHeader
            header="BRINGING SPORTS TO UNDERPRIVILEGED AND DIFFERENTLY-ABLED"
            subHeader="WHAT WE DO"
            white={true}
          />
        </div>
        <Row>
          {items.map((item) => {
            return (
              <Col lg={4} md={12} sm={12} className={`${styles.itemCol} mb-5`}>
                <div className={styles.card}>
                  <div className={`${styles.iconDiv}`}>
                    <Image src={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <div className={styles.subTitle}>{item.subTitle}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDoSection;
