import PropTypes from "prop-types";
import { useEffect } from "react";
import { FOOTER_ID, LAYOUT_BODY_ID, NAVBAR_ID } from "../utils/constants";

import BlufinNavbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const DefaultLayout = (props) => {
  const adjustLayout = () => {
    const navbarElementHeight = document.getElementById(NAVBAR_ID).offsetHeight;
    const footerHeight = document.getElementById(FOOTER_ID).offsetHeight;

    // Set body position and height relative to the navbar height
    const layoutBody = document.getElementById(LAYOUT_BODY_ID);
    layoutBody.style.marginTop = `${navbarElementHeight}px`;
    const minHeight =
      window.innerHeight - navbarElementHeight - footerHeight - 96;
    layoutBody.style.minHeight = `${minHeight}px`;
  };

  useEffect(() => {
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
    return () => window.removeEventListener("resize", adjustLayout);
  }, []);

  return (
    <div className="default-layout">
      <BlufinNavbar />
      <div className="layout-body" id={LAYOUT_BODY_ID}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

DefaultLayout.defaultProps = {
  children: [],
};

export default DefaultLayout;
