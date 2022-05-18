import { Container, Image } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./AthleteSection.module.scss";

const AthleteSection = () => {
  const AtheleteCard = (athlete) => (
    <div className={styles.athleteCard}>
      <Image src={athlete.image} className={styles.image} />
      <div className={styles.name}>{athlete.name}</div>
    </div>
  );
  return (
    <div className={styles.athleteSection}>
      <Container className="pt-5 pb-5">
        <CommonHeader
          header="ATHLETES"
          subHeader="OUR ACHIVEMENT FROM"
          white={true}
        />
        <div className={styles.athletesCards}>
          <div className="d-flex flex-column justify-content-center mt-lg-5">
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
          </div>
          <div className="d-flex flex-column justify-content-center mb-lg-5">
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
            <AtheleteCard image="/program/grassroot.jpg" name="Ashith Surya" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AthleteSection;
