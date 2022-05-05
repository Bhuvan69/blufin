import { Col, Container, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.mainSection}>
        <Container>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>Walk</div>
            <div className={styles.header}>Run</div>
            <div className={styles.header}>Crawl</div>
          </div>
        </Container>
      </div>
      <div className={styles.secondSection}>
        <div className="">
          <CommonHeader
            header="who we are"
            subHeader="about blufin"
            white={false}
          />
          <div>
            BluFin is a sports foundation founded by Sharath Gayakwad,
            Paralympian & Arjuna Awardee to train under privilege kids and
            specially abled kids with a vision to make them international
            champions.
          </div>
          <div>our vision</div>
          <div>our mission</div>
        </div>
        <div className={styles.sectionImage}>
          <img src="background/about-athlete.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
