import { FOOTER_ID } from "../../utils/constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  const socialMedia = (
    <div className={`${styles.socialMedia} my-2`}>
      <a href="https://www.facebook.com/BakersMarketUK/">
        <img src="socialMedia/facebook.png" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/bakersmarketuk/">
        <img src="socialMedia/instagram.png" alt="Instagram" />
      </a>
      <a href="https://twitter.com/BakersMarketUK">
        <img src="socialMedia/twitter.png" alt="Twitter" />
      </a>
      <a href="https://www.youtube.com/channel/UCwz4l_CJAbeJKvdHZuob9Yg/">
        <img src="socialMedia/youtube.png" alt="Youtube" />
      </a>
      <a href="https://www.linkedin.com/company/bakersmarket">
        <img src="socialMedia/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  );

  return (
    <div id={FOOTER_ID} className={`${styles.footer}`}>
      <div
        className={`${styles.footerContent} p-4 container-fluid d-flex flex-wrap justify-content-center justify-content-md-between`}
      >
        <div
          className={`${styles.footerLeft} d-flex flex-column justify-content-center`}
        >
          <div>
            <img
              src="/images/blufinlogo.png"
              alt="Blufin"
              className="blufin-brand-logo"
            />{" "}
            BluFin Foundation
          </div>
          {socialMedia}
          <ul className={`${styles.siteContactDetails}`}>
            <li>
              <a href="mailto:contactus@blufinfoundation.com">
                contactus@blufinfoundation.com
              </a>
            </li>
            <li>
              <a href="tel:8073344898">+91-8073344898</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
