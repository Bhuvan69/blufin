import { Container, Image, Row, Col } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./EcoSystemSection.module.scss";

const EcoSystemSection = () => {
  const donors = [
    "donors/Antaprerana.png",
    "donors/Accel.png",
    "donors/Kaleyra.jpg",
  ];
  const partners = [
    "partners/zeeswim.png",
    "partners/shishu.jpg",
    "partners/mlc.png",
    "partners/fastnup.png",
    "partners/lbtc.png",
  ];
  const experts = [
    {
      image: "experts/dr-srinand.jpg",
      name: "Dr. Srinand Srinivas",
      body: [
        "Team Doctor, KXIP - IPL",
        "Olympic Committee Licensed Sports Medicine Specialist",
      ],
    },
    {
      image: "experts/mahesh.png",
      name: "Mahesh Kumar",
      body: [
        "Strength and Conditioning Coach",
        "Pro-kabaddi and Karnataka basketball team trainer",
      ],
    },
    {
      image: "experts/silky.jpg",
      name: "Silky Mahajan",
      body: ["Renowned Sports Nutrition Expertrts Medicine Specialist"],
    },
    {
      image: "experts/anirudh.jpg",
      name: "Anirudh Kulkarni",
      body: ["Legal Advisor", "Advocate, Karnataka High Court"],
    },
    {
      image: "experts/cheryl.jpeg",
      name: "Cheryl Braggs",
      body: ["Communications and content specialist"],
    },
  ];
  return (
    <div className={styles.ecosystemSection}>
      <Container className="pt-5 pb-5">
        <CommonHeader header="Ecosystem" subHeader="" white={false} />
        <Row className="mt-5">
          <Col sm={12} md={2} className="">
            <div className={styles.header}>Donors</div>
          </Col>
          <Col sm={12} md={9}>
            <Row className="align-items-center">
              {donors.map((donor) => (
                <Col sm={12} md={4} lg={3}>
                  <Image src={donor} className={styles.image} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12} md={2} className="">
            <div className={styles.header}>Partners</div>
          </Col>
          <Col sm={12} md={9}>
            <Row className="align-items-center">
              {partners.map((partner) => (
                <Col sm={12} md={4} lg={3}>
                  <Image src={partner} className={styles.image} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12} md={2} className="">
            <div className={styles.header}>Experts</div>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              {experts.map((expert) => (
                <Col sm={12} md={4} lg={3}>
                  <div
                    className={`d-flex flex-row flex-md-column align-items-start ${styles.expert}`}
                  >
                    <Image src={expert.image} className={styles.expertImage} />
                    <div>
                      <div className={styles.expertName}>{expert.name}</div>
                      <ul className={styles.body}>
                        {expert.body.map((point) => (
                          <li className={styles.point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
