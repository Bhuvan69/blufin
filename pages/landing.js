import DefaultLayout from "../components/DefaultLayout";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GallerySection from "../components/GallerySection/GallerySection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import Programs from "../components/Programs/Programs";
import { Image, Video } from "cloudinary-react";
import {
  ABOUT_ID,
  ATHELETES_ID,
  CONTACT_ID,
  DONORS_ID,
  ECOSYSTEM_ID,
  MEDIA_ID,
  NAVBAR_ID,
  PROGRAMS_ID,
  TEAM_ID,
  WHAT_DO_WE_DO_ID,
} from "../utils/constants";
import DonorSection from "../components/DonorSection/DonorSection";
import ExpertsSection from "../components/ExpertsSection/ExpertSection";
import TeamSection from "../components/TeamSection/TeamSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProgramSection from "../components/ProgramsSection/ProgramSection";

const Landing = (props) => {
  const setDivHeight = () => {
    const navbarElementHeight = document.getElementById(NAVBAR_ID).offsetHeight;
    const aboutElement = document.getElementById(ABOUT_ID);
    const programElement = document.getElementById(PROGRAMS_ID);
    const teamElement = document.getElementById(TEAM_ID);
    const expertElement = document.getElementById(ECOSYSTEM_ID);
    const wdwdElement = document.getElementById(WHAT_DO_WE_DO_ID);
    const athletesElement = document.getElementById(ATHELETES_ID);
    const mediaElement = document.getElementById(ATHELETES_ID);
    const contactElement = document.getElementById(CONTACT_ID);

    // aboutElement.style.paddingTop = `${navbarElementHeight}px`;
    programElement.style.paddingTop = `${navbarElementHeight}px`;
    teamElement.style.paddingTop = `${navbarElementHeight}px`;
    expertElement.style.paddingTop = `${navbarElementHeight}px`;
    wdwdElement.style.paddingTop = `${navbarElementHeight}px`;
    athletesElement.style.paddingTop = `${navbarElementHeight}px`;
    mediaElement.style.paddingTop = `${navbarElementHeight}px`;
    contactElement.style.paddingTop = `${navbarElementHeight}px`;
  };
  useEffect(() => {
    setDivHeight();
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div id={ABOUT_ID}>
          <AboutSection />{" "}
        </div>
        <div id={WHAT_DO_WE_DO_ID}></div>
        <div id={PROGRAMS_ID}>
          <ProgramSection />
        </div>
        <div id={ATHELETES_ID}></div>
        <div id={ECOSYSTEM_ID}></div>
        <div id={TEAM_ID}></div>
        <div id={MEDIA_ID}></div>
        <div id={CONTACT_ID}></div>
        <div className="header text-center mb-5">
          What Do We <span className="font-weight-bold">Do?</span>
        </div>
        <div className="text-center mb-5 sub-header">
          Bringing sports to underprivileged and differently-abled
        </div>
        <WhatWeDoSection />
      </div>
      <div id={PROGRAMS_ID}>
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
      <div id={ECOSYSTEM_ID}>
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
    </DefaultLayout>
  );
};

export default Landing;
