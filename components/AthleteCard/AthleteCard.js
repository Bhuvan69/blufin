import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "cloudinary-react";
import moment from "moment";
import { Col, Card } from "react-bootstrap";
import styles from "./AthleteCard.module.scss";

const AthleteCard = (props) => {
  const getMedal = (num, color) => (
    <div className="px-2 text-center">
      <div className="lead">{num > 0 ? num : "-"}</div>
      <FontAwesomeIcon icon={faMedal} color={color} size={"lg"} />
    </div>
  );
  return (
    <Col sm={12} md={12} lg={6} xl={6} className={styles.itemCol}>
      <Card className={styles.itemCard}>
        <Image
          variant="left"
          src={props.item.image}
          className={styles.cardImg}
        />
        <Card.Body>
          <div className={styles.iconDiv}>
            <div className="h3">{props.item.name}</div>
            <small className="text-muted">
              {moment().diff(moment(props.item.dob, "DD-MM-YYYY"), "years")}{" "}
              years, {props.item.sport}
            </small>
          </div>

          <div className="mt-3 text-left">
            <div>
              Current Program:{" "}
              <span className="font-weight-bold">{props.item.program}</span>
            </div>
            <div>
              Training Center:{" "}
              <span className="font-weight-bold">
                {props.item.traningCenter}
              </span>
            </div>
            <div>
              Education:{" "}
              <span className="font-weight-bold">{props.item.education}</span>
            </div>
          </div>
          <hr />
          <div>
            <h5 className="mt-3 text-underline">
              <u>Achievements</u>
            </h5>
            <ul className={`${styles.itemList} mt-2`}>
              {props.item.achievements.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <div className="mt-3 d-flex justify-content-around">
              <div className={styles.medals}>
                <div className="h6">International</div>
                <div className="d-flex">
                  {props.item.international.gold > 0 &&
                    getMedal(props.item.international.gold, "#FFD700")}
                  {props.item.international.silver > 0 &&
                    getMedal(props.item.international.silver, "#C0C0C0")}
                  {props.item.international.bronze > 0 &&
                    getMedal(props.item.international.bronze, "#CD7F32")}
                </div>
              </div>
              <div className={styles.medals}>
                <div className="h6">National</div>
                <div className="d-flex">
                  {props.item.national.gold > 0 &&
                    getMedal(props.item.national.gold, "#FFD700")}
                  {props.item.national.silver > 0 &&
                    getMedal(props.item.national.silver, "#C0C0C0")}
                  {props.item.national.bronze > 0 &&
                    getMedal(props.item.national.bronze, "#CD7F32")}
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AthleteCard;
