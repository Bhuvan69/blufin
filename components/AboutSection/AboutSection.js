import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./AboutSection.module.scss";
import VisionMission from "./VisionMission";

const AboutSection = () => {
  const [size, setSize] = useState();

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const element = document.getElementById("main-container");
    const style = element.currentStyle || window.getComputedStyle(element);
    const secondSection = document.getElementById("second-section");
    secondSection.style.marginLeft = style.marginLeft;
    secondSection.style.marginRight = style.marginRight;
    secondSection.style.paddingLeft = style.paddingLeft;
    secondSection.style.paddingRight = style.paddingRight;
  }, [size]);

  return (
    <div className={styles.aboutSection}>
      <div className={styles.mainSection}>
        <Container id="main-container">
          <div className={styles.headerWrapper}>
            <div className={styles.header}>Train</div>
            <div className={styles.header}>Soar</div>
            <div className={styles.header}>Shine</div>
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
            Blufin Foundation is a sports foundation spearheaded by Sharath
            Gayakwad, Paralympian & Arjuna Awardee to build an inclusive
            sporting ecosystem
          </div>
          {/* <VisionMission
            title="Our Vision"
            body="To have over 50% of the athletes representing India at the olympics and Paralympics from Blufin."
          />
          <VisionMission
            title="Our Mission"
            body="To have over 50% of the athletes representing India at the olympics and Paralympics from Blufin."
          /> */}
        </div>
        <div className={styles.sectionImage}>
          <img src="background/about-athlete.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
