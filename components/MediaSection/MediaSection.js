import { Col, Container, Image, Row } from "react-bootstrap";
import CommonHeader from "../CommonHeader/CommonHeader";
import styles from "./MediaSection.module.scss";

const MediaSection = () => {
  const medias = [
    {
      logo: "media/logical-indian.png",
      content:
        "Advocating Accessibility! This Foundation Works Towards Taking Sports To The Grassroots",
      link: "https://thelogicalindian.com/inclusivity/blufin-foundation-32205",
    },
  ];
  return (
    <div className={styles.mediaSection}>
      <Container className="pt-5 pb-5">
        <CommonHeader header="Media" subHeader="" white={true} />
        <Row className="mt-5">
          {medias.map((media, i) => (
            <Col sm={12} md={6} lg={4} key={`media-${i}`}>
              <div className={styles.media}>
                <div className="d-flex justify-content-center">
                  <Image src={media.logo} className={styles.mediaLogo} />
                </div>
                <div className={styles.content}>{media.content}</div>
                <a href={media.link} target="_blank">
                  <div className={styles.readMore}>Read more</div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MediaSection;
