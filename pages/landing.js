import DefaultLayout from "../components/DefaultLayout";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GallerySection from "../components/GallerySection/GallerySection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import Programs from "../components/Programs/Programs";
import { Image, Video } from "cloudinary-react";

const Landing = (props) => {
  useEffect(() => {
    document.getElementById("landing-video").play();
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div className="landing-video mb-5">
          <div className="background" />
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
        <Row className="about-us p-4 py-5 align-items-center mx-lg-5">
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
        <div className="py-5">
          <div className="header text-center mb-5">
            What Do We <span className="font-weight-bold">Do?</span>
          </div>
          <WhatWeDoSection />
        </div>
        <div className="py-5">
          <div className="header text-center mb-5">
            Current <span className="font-weight-bold">Programs</span>
          </div>
          <Programs />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Landing;
