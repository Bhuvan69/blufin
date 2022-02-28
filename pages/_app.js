import "../styles/globals.scss";
import { Container } from "next/app";
import PropTypes from "prop-types";
import { CloudinaryContext } from "cloudinary-react";

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="blufin">
      <Container>
        <Component {...pageProps} />
      </Container>
    </CloudinaryContext>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
