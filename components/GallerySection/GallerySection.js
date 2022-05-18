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
            <Image src="/gallery/1.jpg" className={styles.image} />
            <Image src="/gallery/2.jpg" className={styles.image} />
            <Image src="/gallery/3.jpg" className={styles.image} />
          </div>
          <div
            className={`${styles.row2} d-flex flex-column justify-content-center`}
          >
            <Image src="/gallery/4.jpg" className={styles.image} />
            <Image src="/gallery/5.jpg" className={styles.image} />
            <Image src="/gallery/6.jpg" className={styles.image} />
          </div>
          <div
            className={`${styles.row3} d-flex flex-column justify-content-center`}
          >
            <Image src="/gallery/7.jpg" className={styles.image} />
            <Image src="/gallery/8.jpg" className={styles.image} />
            <Image src="/gallery/9.jpg" className={styles.image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GallerySection;
