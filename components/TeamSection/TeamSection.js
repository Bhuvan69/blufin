import { Image } from "cloudinary-react";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  const teamMembers = [
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270441/blufin/team/Amar_drq5nn.jpg",
      name: "Amar",
      designation: "Trustee",
      detail: "Solution Architect, Leading AI firm",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270420/blufin/team/Vyshak_simfzq.jpg",
      name: "Vyshak",
      designation: "Trustee",
      detail: "Managment Consultant, Big 5 consulting",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270415/blufin/team/Sharath_fosnrx.jpg",
      name: "Sharath M Gayakwad",
      designation: "Trustee",
      detail: "International Para swimmer, Arjuna awardee",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270433/blufin/team/Ashwin_y5lgre.jpg",
      name: "Ashwin",
      designation: "Growth",
      detail: "Sr Data Analyst, Silicon Valley Ed-Tech firm",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270408/blufin/team/Pavan_jsetsx.jpg",
      name: "Pavan",
      designation: "Marketing",
      detail: "Product Marketing, Leading AI firm",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647273038/blufin/team/IMG_20210829_215912_857_wdbwoz.webp",
      name: "Bhuvan",
      designation: "Tech",
      detail: "Engineer, Leading tech firm",
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1647270430/blufin/team/Nidhi_fxkq7n.jpg",
      name: "Nidhish",
      designation: "Trustee",
      detail: "Swim coach & National softball player",
    },
  ];
  return (
    <div className={styles.teamSection}>
      <Container className="pt-5 pb-5">
        <CommonHeader header="Team" subHeader="" white={true} />
        <Row className="mt-5">
          {teamMembers.map((member) => (
            <Col
              className={styles.member}
              sm={12}
              md={4}
              lg={3}
              key={member.name}
            >
              <Image src={member.image} className={styles.memberImage} />
              <div className={styles.memberName}>{member.name}</div>
              <div className={styles.designation}>{member.designation}</div>
              <div className={styles.detail}>{member.detail}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamSection;
