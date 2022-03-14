import { Image } from "cloudinary-react";
import { Col, Row } from "react-bootstrap";
import styles from "./DonorSection.module.scss";

const DonorSection = () => {
  const donors = [
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270311/blufin/donors/medium_lzceqw.png",
      name: "Antara Prerana Ventures",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270274/blufin/donors/Accel_kxpdn4.png",
      name: "Accel",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270266/blufin/donors/Kaleyra_1_rzqoqr.jpg",
      name: "Kaleyra",
      description: "",
    },
  ];
  return (
    <Row className={`${styles.donorSection} justify-content-md-center`}>
      {donors.map((donor) => (
        <Col className={styles.donor} sm={12} md={4} lg={3} key={donor.name}>
          <Image src={donor.image} className={styles.donorImage} />
          <div>{donor.description}</div>
        </Col>
      ))}
    </Row>
  );
};

export default DonorSection;
