import { Navbar, Nav } from "react-bootstrap";
import { NAVBAR_ID } from "../utils/constants";

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
                    /> BluFin Foundation
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="about">About Us</Nav.Link>
                    <Nav.Link href="programmes">Programmes</Nav.Link>
                    <Nav.Link href="athletes">Athletes</Nav.Link>
                    <Nav.Link href="donors">Donors</Nav.Link>
                    <Nav.Link href="gallery">Gallery</Nav.Link>
                    <Nav.Link href="team">Team</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
