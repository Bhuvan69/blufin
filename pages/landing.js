import DefaultLayout from "../components/DefaultLayout";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GallerySection from "../components/GallerySection/GallerySection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import Programs from "../components/Programs/Programs";
import { Image, Video } from "cloudinary-react";
import {
  ABOUT_ID,
  ATHLETES_ID,
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
import AthleteSection from "../components/AthleteSection/AthleteSection";
import EcoSystemSection from "../components/EcoSystemSection/EcoSystemSection";
import MediaSection from "../components/MediaSection/MediaSection";
import ContactUsSection from "../components/ContactUsSection/ContactUsSection";

const Landing = (props) => {
  const setDivHeight = () => {
    const navbarElementHeight = document.getElementById(NAVBAR_ID).offsetHeight;
    const aboutElement = document.getElementById(ABOUT_ID);
    const programElement = document.getElementById(PROGRAMS_ID);
    const teamElement = document.getElementById(TEAM_ID);
    const expertElement = document.getElementById(ECOSYSTEM_ID);
    const wdwdElement = document.getElementById(WHAT_DO_WE_DO_ID);
    const athletesElement = document.getElementById(ATHLETES_ID);
    const mediaElement = document.getElementById(ATHLETES_ID);
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
        <div id={WHAT_DO_WE_DO_ID}>
          <WhatWeDoSection />
        </div>
        <div id={PROGRAMS_ID}>
          <ProgramSection />
        </div>
        <div id={ATHLETES_ID}>
          <AthleteSection />
        </div>
        <div id={ECOSYSTEM_ID}>
          <EcoSystemSection />
        </div>
        <div id={TEAM_ID}>
          <TeamSection />
        </div>
        <div id={MEDIA_ID}>
          <MediaSection />
        </div>
        <div>
          <GallerySection />
        </div>
        <div id={CONTACT_ID}>
          <ContactUsSection />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Landing;
