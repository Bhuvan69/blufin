import { Navbar, Nav } from "react-bootstrap";
import { NAVBAR_ID, NAV_LINKS } from "../utils/constants";

export default function BlufinNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        collapseOnSelect
        bg="light"
        id={NAVBAR_ID}
        className="blufin-navbar justify-content-between"
      >
        <Navbar.Brand href="/" className="blufin-nav-brand">
          <img
            src="/images/blufinlogo.png"
            alt="Blufin"
            className="blufin-brand-logo"
          />{" "}
          BluFin Foundation
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {NAV_LINKS}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
