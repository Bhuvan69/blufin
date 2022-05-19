import { useState } from "react";
import { Container, Image } from "react-bootstrap";
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
      dob: "12/12/1996",
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
      dob: "12/12/1996",
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
      dob: "12/12/1996",
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
      dob: "12/12/1996",
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
      dob: "12/12/1996",
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
      name: "PRATHAMESH SAMBHAJI KAPADE",
      image: "/athletes/prathamesh.png",
      dob: "12/12/1996",
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
      name: "PAVAN DHANANJAYA",
      image: "/athletes/pavan.png",
      dob: "12/12/1996",
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
  ];

  const closeModal = () => {
    setModalAthlete({});
    setShowModal(false);
  };

  const openModal = (athlete) => {
    setModalAthlete(athlete);
    setShowModal(true);
  };

  const AtheleteCard = (athlete) => {
    return (
      <div
        className={styles.athleteCard}
        role="button"
        onClick={() => openModal(athlete.info)}
      >
        <div className={styles.imageSection}>
          <Image src={athlete.info.image} className={styles.image} />
          <div className={styles.imageOverlay} />
        </div>

        <div className={styles.name}>{athlete.info.name}</div>
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
          header="ATHLETES"
          subHeader="OUR ACHIVEMENT FROM"
          white={true}
        />
        <div className={styles.athletesCards}>
          <div className="d-flex flex-column justify-content-center mt-lg-5">
            <AtheleteCard info={athletes[0]} />
            <AtheleteCard info={athletes[1]} />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <AtheleteCard info={athletes[2]} />
            <AtheleteCard info={athletes[3]} />
            <AtheleteCard info={athletes[4]} />
          </div>
          <div className="d-flex flex-column justify-content-center mb-lg-5">
            <AtheleteCard info={athletes[5]} />
            <AtheleteCard info={athletes[6]} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AthleteSection;
