import DefaultLayout from "../components/DefaultLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import FullScreenImage from "../components/FullScreenImage";

const Gallery = (props) => {
    // Constants
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
        "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
        "11.jpg", "12.jpg", "13.jpg", "14.jpg"];

    // States
    const [showImage, setShowImage] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    // Function - show image in full screen
    const showImageInFullScreen = (src) => {
        setImageSrc(src);
        setShowImage(true);
    };

    return (
        <DefaultLayout>
            <div>
                {showImage && (
                    <FullScreenImage
                        show={showImage}
                        imageSrc={imageSrc}
                        onHide={setShowImage}
                    />
                )}
                <PageHeader title="Our Gallery" image="gallery/4.jpg" />
                <Row className="p-5">
                    {images.map((img) => (
                        <Col lg={3} md={4} sm={12}>
                            <Image
                                src={`/gallery/${img}`}
                                className="gallery-image py-2"
                                role="button"
                                onClick={() => showImageInFullScreen(`/gallery/${img}`)}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </DefaultLayout>
    );
};

export default Gallery;
