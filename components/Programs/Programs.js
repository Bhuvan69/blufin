import {
  faChild,
  faSwimmer,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./Programs.module.scss";

const Programs = () => {
  const items = [
    {
      icon: faChild,
      title: "Grassroots",
      points: [
        "Over 77 kids from the Shishu Mandir children's home being provided free Swimming lessons along with required equipment",
        "In partnership with Zee Swim Academy",
      ],
    },
    {
      icon: faTrophy,
      title: "For The Win",
      points: [
        "FTW program is aimed at supporting and nurturing professional athletes",
        "We have signed 4 para-swimmers looking after their end to end expenses as",
        "Working towards bringing glory for the country",
      ],
    },
    {
      icon: faSwimmer,
      title: "State Meets",
      points: [
        "Teamed up with Karnataka Para Swimming Association to conduct a State-level Swim meet twice every year",
        "A state meet was Conducted in Karnataka after a gap of over 2 years in 2019 - helping in classification and ranking of swimmers",
      ],
    },
  ];
  return (
    <Row className={styles.programs}>
      {items.map((item) => {
        return (
          <Col sm={12} md={12} lg={4} className={styles.itemCol}>
            <Card className={styles.itemCard}>
              <Card.Body>
                <div className={styles.iconDiv}>
                  <h1>{item.title}</h1>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </div>
                <ul className={styles.itemList}>
                  {item.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Programs;
