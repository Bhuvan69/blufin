import DefaultLayout from "../components/DefaultLayout";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GallerySection from "../components/GallerySection/GallerySection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import Programs from "../components/Programs/Programs";
import { Image, Video } from "cloudinary-react";
import {
  ABOUT_ID,
  DONORS_ID,
  EXPERT_ID,
  NAVBAR_ID,
  PROGRAMMES_ID,
  TEAM_ID,
  WHAT_DO_WE_DO_ID,
} from "../utils/constants";
import DonorSection from "../components/DonorSection/DonorSection";
import ExpertsSection from "../components/ExpertsSection/ExpertSection";
import TeamSection from "../components/TeamSection/TeamSection";

const Landing = (props) => {
  const setDivHeight = () => {
    const navbarElementHeight = document.getElementById(NAVBAR_ID).offsetHeight;
    const aboutElement = document.getElementById(ABOUT_ID);
    const donorElement = document.getElementById(DONORS_ID);
    const programElement = document.getElementById(PROGRAMMES_ID);
    const teamElement = document.getElementById(TEAM_ID);
    const expertElement = document.getElementById(EXPERT_ID);
    const wdwdElement = document.getElementById(WHAT_DO_WE_DO_ID);

    aboutElement.style.paddingTop = `${navbarElementHeight}px`;
    donorElement.style.paddingTop = `${navbarElementHeight}px`;
    programElement.style.paddingTop = `${navbarElementHeight}px`;
    teamElement.style.paddingTop = `${navbarElementHeight}px`;
    expertElement.style.paddingTop = `${navbarElementHeight}px`;
    wdwdElement.style.paddingTop = `${navbarElementHeight}px`;
  };
  useEffect(() => {
    document.getElementById("landing-video").play();
    setDivHeight();
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div className="landing-video mb-5">
          <div className="background" />
          {/* <Image
            src="https://res.cloudinary.com/blufin/image/upload/v1647273678/blufin/team/about_dkymr7.jpg"
            className="landing-video-player"
            width="100%"
            height="auto"
          /> */}
          <Video
            id="landing-video"
            publicId="blufin/swimmingTrim_geqwrn"
            className="landing-video-player"
            width="100%"
            muted
          >
            Your browser does not support the video tag.
          </Video>
          <h1 className="landing-header">
            Creating ecosystem that spreads, nurtures and fosters sports as an
            integral part of life for young individuals facing economic and
            physical adversities in daily life.
          </h1>
        </div>
        <Row className="about-us px-4 align-items-center mx-lg-5" id={ABOUT_ID}>
          <Col md={6} sm={12}>
            <img src="/images/about.jpg" alt="About" className="about-image" />
          </Col>
          <Col md={6} sm={12}>
            <div className="header">
              About <span className="font-weight-bold">Us</span>
            </div>
            <div className="py-4">
              BluFin is a sports foundation founded by Sharath Gayakwad,
              Paralympian &amp; Arjuna Awardee to train under privilege kids and
              specially abled kids with a vision to make them international
              champions.
              <br />
              <strong>Vision</strong>: To have over 50% of the athletes
              representing India at the olympics and Paralympics from Blufin.
              <br />
              <strong>Mission</strong>: To establish a state of the art sport
              facilities to train, support and produce international level
              athletes.
            </div>
          </Col>
        </Row>
        {/* <div className="py-5">
          <div className="header text-center mb-5">
            Our <span className="font-weight-bold">Moments</span>
          </div>
          <GallerySection />
        </div> */}
        <div id={WHAT_DO_WE_DO_ID}>
          <div className="header text-center mb-5">
            What Do We <span className="font-weight-bold">Do?</span>
          </div>
          <div className="text-center mb-5 sub-header">
            Bringing sports to underprivileged and differently-abled
          </div>
          <WhatWeDoSection />
        </div>
        <div id={PROGRAMMES_ID}>
          <div className="header text-center mb-5">
            Current <span className="font-weight-bold">Programs</span>
          </div>
          <Programs />
        </div>
        <div id={DONORS_ID}>
          <div className="header text-center mb-5">
            Our <span className="font-weight-bold">Donors</span>
          </div>
          <DonorSection />
        </div>
        <div id={EXPERT_ID}>
          <div className="header text-center mb-5">
            Our <span className="font-weight-bold">Experts</span>
          </div>
          <ExpertsSection />
        </div>
        <div id={TEAM_ID}>
          <div className="header text-center mb-5">
            Our <span className="font-weight-bold">Team</span>
          </div>
          <TeamSection />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Landing;
