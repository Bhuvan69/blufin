import { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Image } from 'react-bootstrap';
import styles from "./GallerySection.module.scss";

const GallerySection = (props) => {
    // Constants
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

    // States
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(2);
    const [scroll, setScroll] = useState(true);

    // Function - on window resize set number of tags
    const resizeWindow = () => {
        const width = window.innerWidth;
    if (width >= 1024) {
      setTotalItems(2);
    } else {
      setTotalItems(1);
    }
    };

    // effects
    useEffect(() => {
        resizeWindow();
        window.addEventListener('resize', resizeWindow);
        return () => window.removeEventListener('resize', resizeWindow);
    }, []);

    useEffect(() => {
        if (scroll) {
            const interval = setInterval(() => {
                setActiveItemIndex(activeItemIndex + 1);
            }, 5000);
            return () => clearInterval(interval);
        }
        return () => { };
    }, [activeItemIndex, scroll]);

    return (
        <div id="gallery-section">
            <div className="container p-lg-0 p-sm-1">
                <div className="blufin-carousel">
                    <ItemsCarousel
                        infiniteLoop
                        gutter={12}
                        numberOfCards={totalItems}
                        activeItemIndex={activeItemIndex}
                        requestToChangeActive={setActiveItemIndex}
                        rightChevron={
                            <Image src="/gallery/right.png" className={`${styles.right}`} />
                        }
                        leftChevron={
                            <Image src="/gallery/left.png" className={`${styles.left}`} />
                        }
                        chevronWidth={20}
                    >
                        {images.map((image, i) => (
                            <div className={`${styles.galleryItem}`}>
                            <img
                                key={i}
                                src={`/gallery/${image}`}
                                alt={`gallery-image-${i}`}
                                className={`${styles.gallerySectionImage}`}
                                onMouseEnter={() => setScroll(false)}
                                onMouseLeave={() => setScroll(true)}
                            />
                            </div>
                        ))}
                    </ItemsCarousel>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
