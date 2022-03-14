import { Image } from "cloudinary-react";
import { Col, Row } from "react-bootstrap";
import styles from "./ExpertsSection.module.scss";

const ExpertsSection = () => {
  const experts = [
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270351/blufin/experts/Dr._Srinand_Srinivas_o1bbzd.jpg",
      name: "Dr. Srinand Srinivas",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270345/blufin/experts/Mr._Mahesh_Kumar_S_y1h7lt.png",
      name: "Mahesh Kumar",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270340/blufin/experts/Silky_Mahajan_abjpap.jpg",
      name: "Silky Mahajan",
      description: "",
    },
  ];
  return (
    <Row className={`${styles.expertSection} justify-content-md-center`}>
      {experts.map((expert) => (
        <Col className={styles.expert} sm={12} md={4} lg={3} key={expert.name}>
          <Image src={expert.image} className={styles.expertImage} />
          <div className={styles.expertName}>{expert.name}</div>
          <div>{expert.description}</div>
        </Col>
      ))}
    </Row>
  );
};

export default ExpertsSection;
