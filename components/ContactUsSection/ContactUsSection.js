import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./ContactUsSection.module.scss";

const ContactUsSection = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className={styles.contactus}>
      <Container className="pb-5">
        <CommonHeader header="Contact us" subHeader="" white={false} />
        <Row>
          <Col lg={6} md={12} className="mt-5">
            <div className={styles.subHeader}>Lets Connect</div>
            <a
              href="https://www.google.com/maps/place/BluFin+Foundation/@12.9290242,77.5498274,15z/data=!4m5!3m4!1s0x0:0x514ca789678c9226!8m2!3d12.9290242!4d77.5498274"
              target="_blank"
            >
              <Image src="map/map.png" className={styles.map} />
            </a>
            <Row>
              <Col md={6} sm={12}>
                <a
                  href="https://www.google.com/maps/place/BluFin+Foundation/@12.9290242,77.5498274,15z/data=!4m5!3m4!1s0x0:0x514ca789678c9226!8m2!3d12.9290242!4d77.5498274"
                  target="_blank"
                >
                  <div className={styles.iconText}>
                    <Image src="icons/address.svg" />
                    <div className={styles.text}>
                      No.71/4, 1st B cross BSK 3rd stage 3rd phase, 5th Block,
                      Bengaluru, Karnataka 560085
                    </div>
                  </div>
                </a>
              </Col>
              <Col md={6} sm={12}>
                <a href="tel:8073344898">
                  <div className={styles.iconText}>
                    <Image src="icons/phone.svg" />
                    <div className={styles.text}>+91-8073344898</div>
                  </div>
                </a>
                <a href="mailto:contactus@blufinfoundation.com">
                  <div className={styles.iconText}>
                    <Image src="icons/email.svg" />
                    <div className={styles.text}>
                      contactus@blufinfoundation.com
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} className="mt-5">
            <div className={styles.subHeader}>Request to callback</div>
            <div className={styles.para}>
              Don't hesitate to contact us if you have any questions,comments or
              want to say Hi! We will try to respond to everything you ask.
            </div>
            <div className={styles.form}>
              <input
                type="text"
                value={name}
                placeholder="NAME"
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={subject}
                placeholder="DESCRIBE YOUR SUBJECT"
                className={styles.input}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                value={body}
                placeholder="MESSAGE"
                rows="4"
                className={styles.input}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <a
              href={`mailto:contactus@blufinfoundation.com?subject=${name} - ${subject}&body=${body}`}
            >
              <Button className={styles.button}>
                <div>Send</div>{" "}
                <Image src="icons/send.svg" className={styles.icon} />
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsSection;
