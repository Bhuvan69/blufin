import { Row } from "react-bootstrap";
import AthleteCard from "../components/AthleteCard/AthleteCard";
import DefaultLayout from "../components/DefaultLayout";
import PageHeader from "../components/PageHeader/PageHeader";

const Athletes = (props) => {
  const items = [
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646998714/blufin/Athletes/PXL_20210815_075105425.PORTRAIT_ikfg7i.jpg",
      name: "Punith Nandakumar",
      sport: "Swimming",
      dob: "09-08-2000",
      traningCenter: "Zee Swim Academy, Bengaluru",
      program: "For The Win",
      education: "B.E graduate, BMS College of Engineering",
      international: {
        gold: 2,
        silver: 4,
        bronze: 3,
      },
      national: {
        gold: 11,
        silver: 13,
        bronze: 4,
      },
      achievements: [
        "State: Ekalavya Award 2019",
        "National: National Award 2020 - best sports person with a disability",
        "2018 Asian Para Games, Indonesia - Finalist (4th Place)",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646998706/blufin/Athletes/PXL_20210815_075247995.PORTRAIT_mbufpp.jpg",
      name: "Gopichand Lingutla",
      sport: "Swimming",
      dob: "09-08-2000",
      traningCenter: "Zee Swim Academy, Bengaluru",
      program: "For The Win",
      education: "Class 9, Kendriya Vidyalaya, Bellari",
      international: {
        gold: 2,
        silver: 0,
        bronze: 0,
      },
      national: {
        gold: 9,
        silver: 0,
        bronze: 0,
      },
      achievements: ["2021 Asian Youth Para Games, Bahrain - Top 10 finish"],
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646998715/blufin/Athletes/PXL_20210815_075145544.PORTRAIT_ku20nh.jpg",
      name: "Yojit Nalanna",
      sport: "Swimming",
      dob: "09-08-2000",
      traningCenter: "Zee Swim Academy, Bengaluru",
      program: "For The Win",
      education: "Class 10, PSSEMR School, Davanagere",
      international: {
        gold: 2,
        silver: 1,
        bronze: 0,
      },
      national: {
        gold: 4,
        silver: 2,
        bronze: 0,
      },
      achievements: ["2021 Asian Youth Para Games, Bahrain - Top 10 finish"],
    },
    {
      image:
        "https://res.cloudinary.com/blufin/image/upload/v1646998711/blufin/Athletes/PXL_20210815_075232553.PORTRAIT_lrrsrb.jpg",
      name: "Yojit Nalanna",
      sport: "Swimming",
      dob: "09-08-2000",
      traningCenter: "Zee Swim Academy, Bengaluru",
      program: "For The Win",
      education:
        "B.A 1st year, Shri Lahu Bala Paritkar Mahavidyalay, Kolhapur ",
      international: {
        gold: 4,
        silver: 1,
        bronze: 0,
      },
      national: {
        gold: 7,
        silver: 5,
        bronze: 5,
      },
      achievements: ["National Record holder in 400m Freestyle"],
    },
  ];
  return (
    <DefaultLayout>
      <div>
        <PageHeader title="Our Athletes" image="gallery/7.jpg" />
        <Row className="mt-5 p-2 p-lg-5 p-md-5">
          {items.map((item) => (
            <AthleteCard item={item} />
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
};

export default Athletes;
