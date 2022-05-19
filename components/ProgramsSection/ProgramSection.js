import { Card, Col, Container, Image, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./ProgramSection.module.scss";

const ProgramSection = () => {
  const programs = [
    {
      title: "Grassroots",
      body: [
        "Over 77 kids from the Shishu Mandir children's home being provided free Swimming lessons along with required equipment",
        "In partnership with Zee Swim Academy",
      ],
      image: "/program/grassroot.jpg",
    },
    {
      title: "For The Win",
      body: [
        "FTW program is aimed at supporting and nurturing professional athletes",
        "We have signed 4 para-swimmers looking after their end to end expenses as",
        "Working towards bringing glory for the country",
      ],
      image: "/program/for-the-win.jpg",
    },
    {
      title: "State Meets",
      body: [
        "Teamed up with Karnataka Para Swimming Association to conduct a State-level Swim meet twice every year",
        "A state meet was Conducted in Karnataka after a gap of over 2 years in 2019 - helping in classification and ranking of swimmers",
      ],
      image: "/program/statemeet.jpg",
    },
  ];

  const programCard = (prog, i) => {
    return (
      <Card className={`${styles.programCard} mb-5`}>
        <Row>
          <Col sm={12} md={{ order: i % 2 === 0 ? "first" : "last" }}>
            <Image src={prog.image} className={styles.cardImg} />
          </Col>
          <Col sm={12} md={6}>
            <Card.Body
              className={`${styles.body} d-flex flex-column justify-content-center`}
            >
              <div className={styles.title}>{prog.title}</div>
              <ul className={styles.itemList}>
                {prog.body.map((point) => (
                  <li className={styles.point}>{point}</li>
                ))}
              </ul>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  };
  return (
    <Container>
      <div className={styles.programSection}>
        <CommonHeader header="Current Programs" subHeader="" white={false} />
        <div className="mt-5">
          {programs.map((program, i) => programCard(program, i))}
        </div>
      </div>
    </Container>
  );
};

export default ProgramSection;
