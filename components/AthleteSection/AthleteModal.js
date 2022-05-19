import moment from "moment";
import { Col, Image, Modal, Row } from "react-bootstrap";
import styles from "./AthleteSection.module.scss";

const AthleteModal = (props) => {
  const { show, handleClose, athlete } = props;

  const medals = (medal) => (
    <div className="d-flex">
      {medal.gold > 0 && (
        <div className="d-flex mr-4">
          <Image src="icons/gold.svg" />
          <div className={`${styles.bold} ml-2`}>{medal.gold} Gold</div>
        </div>
      )}
      {medal.silver > 0 && (
        <div className="d-flex mr-4">
          <Image src="icons/silver.svg" />
          <div className={`${styles.bold} ml-2`}>{medal.silver} Silver</div>
        </div>
      )}
      {medal.bronze > 0 && (
        <div className="d-flex mr-4">
          <Image src="icons/bronze.svg" />
          <div className={`${styles.bold} ml-2`}>{medal.bronze} Bronze</div>
        </div>
      )}
    </div>
  );
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered={true}
      className={styles.athleteModal}
      size="lg"
    >
      <div
        className={`rounded-circle ${styles.closeModal}`}
        role="button"
        onClick={handleClose}
      >
        <Image src="icons/x.svg" />
      </div>
      {athlete.name && (
        <Row>
          <Col sm={12} md={12} lg={6} className={styles.imageSection}>
            <Image src={athlete.image} className={styles.athleteImage} />
            <div className={styles.name}>{athlete.name}</div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Modal.Body>
              <div className={styles.section}>
                <div className={styles.header}>{athlete.sport}</div>
                <Row>
                  <Col>
                    <div className={styles.subheader}>Age:</div>
                    <div className={styles.bold}>
                      {moment().diff(athlete.dob, "years")} years
                    </div>
                  </Col>
                  <Col>
                    <div className={styles.subheader}>BluFin program:</div>
                    <div className={styles.bold}>{athlete.program}</div>
                  </Col>
                </Row>
              </div>
              <div
                className={`${styles.section} ${
                  athlete.awards.length > 0 ? "" : styles.noborder
                }`}
              >
                <div className={styles.header}>achievements</div>
                {(athlete.medals.international.gold > 0 ||
                  athlete.medals.international.silver > 0 ||
                  athlete.medals.international.bronze > 0) && (
                  <div className="mt-3">
                    <div className={styles.subheader}>International:</div>
                    {medals(athlete.medals.international)}
                  </div>
                )}
                {(athlete.medals.national.gold > 0 ||
                  athlete.medals.national.silver > 0 ||
                  athlete.medals.national.bronze > 0) && (
                  <div className="mt-3">
                    <div className={styles.subheader}>National:</div>
                    {medals(athlete.medals.national)}
                  </div>
                )}
                <div className="mt-3">
                  {athlete.achievements.map((achiv) => (
                    <div className={styles.point}>{achiv}</div>
                  ))}
                </div>
              </div>
              {athlete.awards.length > 0 && (
                <div className={`${styles.section} ${styles.noborder}`}>
                  <div className={styles.header}>awards</div>
                  {athlete.awards.map((awrd) => (
                    <div className={`${styles.point} ${styles.award}`}>
                      {awrd}
                    </div>
                  ))}
                </div>
              )}
            </Modal.Body>
          </Col>
        </Row>
      )}
    </Modal>
  );
};

export default AthleteModal;
