import { Container, Image, Row, Col } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./EcoSystemSection.module.scss";

const EcoSystemSection = () => {
  const donors = ["donors/1.jpg", "donors/2.jpg"];
  const partners = ["donors/1.jpg", "donors/2.jpg"];
  const experts = [
    {
      image: "donors/1.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        " Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
    {
      image: "donors/1.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        " Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
    {
      image: "donors/1.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        " Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
    {
      image: "donors/1.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        " Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
    {
      image: "donors/1.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        " Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
  ];
  return (
    <div className={styles.ecosystemSection}>
      <Container className="pt-5 pb-5">
        <CommonHeader
          header="Ecosystem"
          subHeader="Para-swimming"
          white={false}
        />
        <Row>
          <Col sm={12} md={2} className="mt-5">
            <div className={styles.header}>Donors</div>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              {donors.map((donor) => (
                <Col sm={12} md={4} lg={3} className="mt-5">
                  <Image src={donor} className={styles.image} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={2} className="mt-5">
            <div className={styles.header}>Partners</div>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              {partners.map((partner) => (
                <Col sm={12} md={4} lg={3} className="mt-5">
                  <Image src={partner} className={styles.image} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={2} className="mt-5">
            <div className={styles.header}>Experts</div>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              {experts.map((expert) => (
                <Col sm={12} md={4} lg={3} className="mt-5">
                  <Image src={expert.image} className={styles.image} />
                  <div className={styles.expertName}>{expert.name}</div>
                  <ul className={styles.body}>
                    {expert.body.map((point) => (
                      <li className={styles.point}>{point}</li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcoSystemSection;
