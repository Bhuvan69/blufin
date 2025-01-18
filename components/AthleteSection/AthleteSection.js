import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import AthleteModal from "./AthleteModal";
import styles from "./AthleteSection.module.scss";

const AthleteSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalAthlete, setModalAthlete] = useState({});

  const athletes = [
    {
      name: "ashith surya",
      image: "/athletes/ashith.png",
      dob: "1/1/1996",
      program: "For The Win",
      sport: "badminton",
      medals: {
        national: { gold: 0, silver: 0, bronze: 0 },
        international: { gold: 1, silver: 1, bronze: 2 },
      },
      achievements: [
        "Representing Karnataka Badminton association: All India senior ranking 2020 - Bronze",
      ],
      awards: [
        "Best BWF International rank: 71",
        "Current BWF Rank Men's doubles: 72",
        "Mixed doubles: 109",
      ],
    },
    {
      name: "vasantha kumar",
      image: "/athletes/vasantha.png",
      dob: "1/1/1995",
      program: "For The Win",
      sport: "badminton",
      medals: {
        national: { gold: 0, silver: 0, bronze: 2 },
        international: { gold: 1, silver: 0, bronze: 2 },
      },
      achievements: ["State Rank: 1"],
      awards: [
        "Best BWF International rank: 71",
        "Current BWF Rank Men's doubles: 72",
      ],
    },
    {
      name: "punith nandakumar",
      image: "/athletes/punith.jpeg",
      dob: "1/1/2001",
      program: "For The Win",
      sport: "Para-swimming",
      medals: {
        national: { gold: 11, silver: 13, bronze: 4 },
        international: { gold: 2, silver: 4, bronze: 3 },
      },
      achievements: [],
      awards: [
        "State: Ekalavya Award 2019",
        "National: National Award 2020 - best sports person with a disability",
        "2018 Asian Para Games, Indonesia - Finalist (4th Place)",
      ],
    },
    {
      name: "gopichand lingutla",
      image: "/athletes/gopichand.jpeg",
      dob: "1/1/2007",
      program: "For The Win",
      sport: "Para-swimming",
      medals: {
        national: { gold: 9, silver: 0, bronze: 0 },
        international: { gold: 2, silver: 0, bronze: 0 },
      },
      achievements: ["2021 Asian Youth Para Games, Bahrain - Top 10 finish"],
      awards: [],
    },
    {
      name: "yojit nallana",
      image: "/athletes/yojit.jpg",
      dob: "1/1/2007",
      program: "For The Win",
      sport: "Para-swimming",
      medals: {
        national: { gold: 4, silver: 2, bronze: 0 },
        international: { gold: 2, silver: 1, bronze: 0 },
      },
      achievements: ["2021 Asian Youth Para Games, Bahrain - Top 10 finish"],
      awards: [],
    },
    {
      name: "Prathamesh Kapade",
      image: "/athletes/prathamesh.png",
      dob: "1/1/2002",
      program: "For The Win",
      sport: "Para-swimming",
      medals: {
        national: { gold: 7, silver: 5, bronze: 5 },
        international: { gold: 4, silver: 1, bronze: 0 },
      },
      achievements: ["National Record holder in 400m Freestyle"],
      awards: [],
    },
    {
      name: "Pavan Dhananjaya",
      image: "/athletes/pavan.png",
      dob: "1/1/2007",
      program: "For The Win",
      sport: "swimming",
      medals: {
        national: { gold: 9, silver: 1, bronze: 0 },
        international: { gold: 0, silver: 0, bronze: 1 },
      },
      achievements: [
        "Junior National Aquatic Championships 2021 - 5 gold, Individual champtionship",
      ],
      awards: [],
    },
    {
      name: "Ajibur Molla",
      image: "/athletes/ajibur.jpeg",
      dob: "1/1/1993",
      program: "For The Win",
      sport: "para-swimming",
      medals: {
        national: { gold: 33, silver: 11, bronze: 7 },
        international: { gold: 0, silver: 0, bronze: 0 },
      },
      achievements: [
        "Participated at the 2023 Citi Para Swimming World Series Singapore from 29 April to 1 May 2023",
        "Was ranked World No. 21 in the 100m Breaststroke",
        "Was ranked Asian No. 6 in the 100m Breaststroke",
        "Have previously held the national record in 50m Freestyle, 100m Freestyle, 50m Backstroke & 100m Backstroke",
        "Have received best swimmer trophy in various National Championships",
      ],
      awards: [],
    },
    {
      name: "Ananya Ganglani",
      image: "/athletes/ananya.jpeg",
      dob: "1/1/2010",
      program: "For The Win",
      sport: "para-swimming",
      medals: {
        national: { gold: 1, silver: 0, bronze: 2 },
        international: { gold: 0, silver: 0, bronze: 0 },
      },
      achievements: [
        "Won Gold Medal in 100m butterfly and 2 Bronze medals in 50m and 100m freestyle events at the 24th Para Nationals in Goa held from 19th to 22nd October 2024",
        "Participated in The DPS National Swimming Meet Girls (open) -2024 at NOIDA with able bodied swimmers",
        "Participated in SGFI state level competition 2024 in Bhopal, MP after qualifying in the district with a silver medal in 50m butterfly with able bodied swimmers",
        "Have won 1 gold and 1 bronze medal at sage international school non medalist competition with able bodied swimmers in 2023",
        "Won 1 gold in 50m fly and 1 silver medal in 4x50 freestyle relay at JSWS competition held at DPS Rau, Indore with able bodied swimmers",
        "Have won a total of 6 medals with 4 gold, 1 silver and 2 bronze medals at Inter-House swimming competition held by DPS Neelbad in 2022,2023 and 2024",
      ],
      awards: [],
    },
  ];

  const closeModal = () => {
    setModalAthlete({});
    setShowModal(false);
  };

  const openModal = (athlete) => {
    setModalAthlete(athlete);
    setShowModal(true);
  };

  const AtheleteCard = ({ athlete }) => {
    return (
      <div
        className={styles.athleteCard}
        role="button"
        onClick={() => openModal(athlete)}
      >
        <div className={styles.imageSection}>
          <Image src={athlete.image} className={styles.image} />
        </div>

        <div className={styles.name}>{athlete.name}</div>
        <div className={styles.sport}>{athlete.sport}</div>
        <div className={styles.line} />
      </div>
    );
  };

  return (
    <div className={styles.athleteSection}>
      <AthleteModal
        show={showModal}
        athlete={modalAthlete}
        handleClose={closeModal}
      />
      <Container className="pt-5 pb-5">
        <CommonHeader
          header="INTERNATIONAL ATHLETES"
          subHeader="OUR"
          white={true}
        />
        <Row className={styles.athletesCards}>
          {athletes.map((athlete) => (
            <Col lg={3} md={4}>
              <AtheleteCard athlete={athlete} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AthleteSection;
