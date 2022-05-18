import { Col, Container, Row, Image } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  const teamMembers = [
    {
      image: "team/Amar.jpg",
      name: "Amar",
      designation: "Trustee",
      detail: "Solution Architect, Leading AI firm",
    },
    {
      image: "team/Vyshak.jpg",
      name: "Vyshak",
      designation: "Trustee",
      detail: "Managment Consultant, Big 5 consulting",
    },
    {
      image: "team/Sharath.jpg",
      name: "Sharath M Gayakwad",
      designation: "Trustee",
      detail: "International Para swimmer, Arjuna awardee",
    },
    {
      image: "team/Ashwin.jpg",
      name: "Ashwin",
      designation: "Growth",
      detail: "Sr Data Analyst, Silicon Valley Ed-Tech firm",
    },
    {
      image: "team/Pavan.jpg",
      name: "Pavan",
      designation: "Marketing",
      detail: "Product Marketing, Leading AI firm",
    },
    {
      image: "team/Bhuvan.jpg",
      name: "Bhuvan",
      designation: "Tech",
      detail: "Engineer, Leading tech firm",
    },
    {
      image: "team/Nidhi.jpg",
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
