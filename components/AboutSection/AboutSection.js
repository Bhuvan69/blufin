import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./AboutSection.module.scss";
import VisionMission from "./VisionMission";

const AboutSection = () => {
  useEffect(() => {
    const element = document.getElementById("main-container");
    const style = element.currentStyle || window.getComputedStyle(element);
    const secondSection = document.getElementById("second-section");
    secondSection.style.marginLeft = style.marginLeft;
    secondSection.style.marginRight = style.marginRight;
    secondSection.style.paddingLeft = style.paddingLeft;
    secondSection.style.paddingRight = style.paddingRight;
  }, []);

  return (
    <div className={styles.aboutSection}>
      <div className={styles.mainSection}>
        <Container id="main-container">
          <div className={styles.headerWrapper}>
            <div className={styles.header}>Walk</div>
            <div className={styles.header}>Run</div>
            <div className={styles.header}>Crawl</div>
          </div>
        </Container>
      </div>
      <div className={styles.secondSection}>
        <div id="second-section">
          <CommonHeader
            header="who we are"
            subHeader="about blufin"
            white={false}
          />
          <div className={styles.about}>
            BluFin is a sports foundation founded by Sharath Gayakwad,
            Paralympian & Arjuna Awardee to train under privilege kids and
            specially abled kids with a vision to make them international
            champions.
          </div>
          <VisionMission
            title="Our Vision"
            body="To have over 50% of the athletes representing India at the olympics and Paralympics from Blufin."
          />
          <VisionMission
            title="Our Mission"
            body="To have over 50% of the athletes representing India at the olympics and Paralympics from Blufin."
          />
        </div>
        <div className={styles.sectionImage}>
          <img src="background/about-athlete.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
