import { Image } from "cloudinary-react";
import { Col, Row } from "react-bootstrap";
import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  const teamMembers = [
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270441/blufin/team/Amar_drq5nn.jpg",
      name: "Amar",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270433/blufin/team/Ashwin_y5lgre.jpg",
      name: "Ashwin",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270430/blufin/team/Nidhi_fxkq7n.jpg",
      name: "Nidhish",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270420/blufin/team/Vyshak_simfzq.jpg",
      name: "Vyshak",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270415/blufin/team/Sharath_fosnrx.jpg",
      name: "Sharath M Gayakwad",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270408/blufin/team/Pavan_jsetsx.jpg",
      name: "Pavan",
      description: "",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647273038/blufin/team/IMG_20210829_215912_857_wdbwoz.webp",
      name: "Bhuvan",
      description: "",
    },
  ];
  return (
    <Row className={`${styles.teamSection} justify-content-md-center`}>
      {teamMembers.map((member) => (
        <Col className={styles.member} sm={12} md={4} lg={3} key={member.name}>
          <Image src={member.image} className={styles.memberImage} />
          <div className={styles.memberName}>{member.name}</div>
          <div>{member.description}</div>
        </Col>
      ))}
    </Row>
  );
};

export default TeamSection;
