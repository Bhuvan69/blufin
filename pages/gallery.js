import DefaultLayout from "../components/DefaultLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import FullScreenImage from "../components/FullScreenImage";

const Gallery = (props) => {

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
          {props.images.map((img) => (
            <Col lg={3} md={4} sm={12}>
              <Image
                src={img.image}
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

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?expression="gallery"&max_results=100`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  )
    .then((r) => {
      return r.json();
    })
    .catch((e) => console.log(e));

  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });

  return {
    props: {
      images,
    },
  };
}

export default Gallery;
