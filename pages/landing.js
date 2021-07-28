import DefaultLayout from "../components/DefaultLayout";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GallerySection from "../components/GallerySection/GallerySection";

const Landing = (props) => {
  useEffect(() => {
    document.getElementById('landing-video').play();
  }, [])

  return (
    <DefaultLayout>
      <div>
        <div className="landing-video mb-5">
          <div className="background" />
          <video id="landing-video" className="landing-video-player" width="100%" muted>
            <source src="/videos/swimmingTrim.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
          <h1 className="landing-header">
            We are a nonprofit aiming to train under privilege kids and specially
            abled kids with a vision to make them international champions.
          </h1>
        </div>
        <Row className="about-us p-4 py-5 align-items-center mx-lg-5">
          <Col md={6} sm={12}>
            <img
              src="/images/about.jpg"
              alt="About"
              className="about-image"
            />
          </Col>
          <Col md={6} sm={12}>
            <div className="header">About <span className="font-weight-bold">Us</span></div>
            <div className="py-4">
              BluFin is a sports foundation founded by Sharath Gayakwad,
                Paralympian &amp; Arjuna Awardee to train under privilege kids and
                specially abled kids with a vision to make them international
              champions.<br />
              <strong>Vision</strong>: To have over 50% of the athletes
              representing India at the olympics and Paralympics from Blufin.<br />
              <strong>Mission</strong>: To establish a state of the art sport
              facilities to train, support and produce international level
              athletes.
            </div>
          </Col>
        </Row>
        <div className="py-5">
          <div className="header text-center mb-5">Our <span className="font-weight-bold">Moments</span></div>
          <GallerySection />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Landing;
