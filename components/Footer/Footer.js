import { Container, Image, NavLink } from "react-bootstrap";
import {
  ABOUT_ID,
  ATHLETES_ID,
  ECOSYSTEM_ID,
  FOOTER_ID,
  MEDIA_ID,
  PROGRAMS_ID,
  TEAM_ID,
} from "../../utils/constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  const socialMedia = (
    <div className={`${styles.socialMedia} my-2`}>
      <a href="https://www.facebook.com/blufinfoundation/" target="_blank">
        <img src="socialMedia/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/blufinfoundation/" target="_blank">
        <img src="socialMedia/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://twitter.com/blufinfoundati1?lang=en" target="_blank">
        <img src="socialMedia/twitter.svg" alt="Twitter" />
      </a>
      {/* <a href="https://www.youtube.com/channel/UCwz4l_CJAbeJKvdHZuob9Yg/" target="_blank">
        <img src="socialMedia/youtube.svg" alt="Youtube" />
      </a> */}
      <a
        href="https://www.linkedin.com/company/blufin-foundation"
        target="_blank"
      >
        <img src="socialMedia/linkedin.svg" alt="LinkedIn" />
      </a>
    </div>
  );

  return (
    <div id={FOOTER_ID} className={`${styles.footer}`}>
      <Container>
        <div className={`${styles.footerContent}`}>
          <div className="w-100 text-center py-4">
            <Image
              src="icons/top.svg"
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          <div
            className={`${styles.footerLeft} d-none d-lg-flex d-md-none justify-content-between`}
          >
            <div className="d-flex">
              <NavLink href={`landing#${ABOUT_ID}`} className="pl-0">
                About us
              </NavLink>
              <NavLink href={`landing#${PROGRAMS_ID}`}>Programs</NavLink>
              <NavLink href={`landing#${ATHLETES_ID}`}>Athletes</NavLink>
              <NavLink href={`landing#${ECOSYSTEM_ID}`}>Ecosystem</NavLink>
              <NavLink href={`landing#${TEAM_ID}`}>Team</NavLink>
              <NavLink href={`landing#${MEDIA_ID}`}>Media</NavLink>
            </div>
            <div className="d-flex text-center align-items-center">
              <div className={styles.logoText}>BluFin Foundation</div>
              <img
                src="/images/blufinlogo.png"
                alt="Blufin"
                className="blufin-brand-logo"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
          {socialMedia} <div>© Copyright 2022 Blufin Foundation</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
