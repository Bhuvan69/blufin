import { Container, Image } from "react-bootstrap";
import styles from "./GallerySection.module.scss";

const GallerySection = () => {
  return (
    <div className={styles.gallerySection}>
      <Container className="pb-5">
        <div className={styles.images}>
          <div
            className={`${styles.row1} d-flex flex-column justify-content-center`}
          >
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
          </div>
          <div
            className={`${styles.row2} d-flex flex-column justify-content-center`}
          >
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
          </div>
          <div
            className={`${styles.row3} d-flex flex-column justify-content-center`}
          >
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
            <Image src="/program/grassroot.jpg" className={styles.image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GallerySection;
