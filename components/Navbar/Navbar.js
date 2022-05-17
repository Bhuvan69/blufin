import { Navbar, Nav, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import {
  NAVBAR_ID,
  ABOUT_ID,
  PROGRAMS_ID,
  DONORS_ID,
  TEAM_ID,
  WHAT_DO_WE_DO_ID,
  ATHLETES_ID,
  ECOSYSTEM_ID,
  MEDIA_ID,
  CONTACT_ID,
} from "../../utils/constants";
import styles from "./Navbar.module.scss";
import { useState } from "react";

export default function BlufinNavbar() {
  const [activeKey, setActiveKey] = useState(`landing#${ABOUT_ID}`);
  const router = useRouter();
  return (
    <>
      <Navbar
        expand="lg"
        collapseOnSelect
        fixed="top"
        bg="white"
        id={NAVBAR_ID}
        className={`${styles.customNavbar} blufin-navbar justify-content-between`}
      >
        <Navbar.Brand
          href="/"
          className={`${styles.navbarBrand} blufin-nav-brand`}
        >
          <img
            src="/images/blufinlogo.png"
            alt="Blufin"
            className="blufin-brand-logo"
          />
          <div>BluFin Foundation</div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className={`${styles.navLinks} justify-content-end`}>
          <Nav
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
          >
            <Nav.Link className="bf-nav-link" href={`landing#${ABOUT_ID}`}>
              About
            </Nav.Link>
            <Nav.Link
              className="bf-nav-link"
              href={`landing#${WHAT_DO_WE_DO_ID}`}
            >
              What we do?
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${PROGRAMS_ID}`}>
              Programs
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${ATHLETES_ID}`}>
              Athletes
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${ECOSYSTEM_ID}`}>
              Ecosystem
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${TEAM_ID}`}>
              Team
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${MEDIA_ID}`}>
              Media
            </Nav.Link>
            <Nav.Link className="bf-nav-link" href={`landing#${CONTACT_ID}`}>
              Contact
            </Nav.Link>
            {/* <Button>Get in touch</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
