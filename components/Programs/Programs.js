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
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646056170/blufin/gallery/5_drprbu.jpg",
      icon: faChild,
      title: "Grassroots",
      points: [
        "Over 77 kids from the Shishu Mandir children's home being provided free Swimming lessons along with required equipment",
        "In partnership with Zee Swim Academy",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646979518/blufin/gallery/PXL_20210815_073223742.MP_kdvju1.jpg",
      icon: faTrophy,
      title: "For The Win",
      points: [
        "FTW program is aimed at supporting and nurturing professional athletes",
        "We have signed 4 para-swimmers looking after their end to end expenses as",
        "Working towards bringing glory for the country",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646056170/blufin/gallery/13_kjhgkh.jpg",
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
              <Card.Img
                variant="top"
                src={item.image}
                className={styles.cardImg}
              />
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
