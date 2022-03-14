import { Nav } from "react-bootstrap";

const NAVBAR_ID = "navbar";
const LAYOUT_BODY_ID = "layoutBody";
const FOOTER_ID = "footer";
const ABOUT_ID = "about";
const PROGRAMMES_ID = "programmes";
const DONORS_ID = "donors";
const TEAM_ID = "team";
const EXPERT_ID = "experts";
const WHAT_DO_WE_DO_ID = "wdwd";

const NAV_LINKS = (
  <>
    <Nav.Link href={`landing#${ABOUT_ID}`}>About Us</Nav.Link>
    <Nav.Link href={`landing#${PROGRAMMES_ID}`}>Programmes</Nav.Link>
    <Nav.Link href="athletes">Athletes</Nav.Link>
    <Nav.Link href={`landing#${DONORS_ID}`}>Donors</Nav.Link>
    <Nav.Link href="gallery">Gallery</Nav.Link>
    <Nav.Link href={`landing#${TEAM_ID}`}>Team</Nav.Link>
    {/* <Nav.Link href="contact">Contact</Nav.Link> */}
  </>
);
export {
  NAVBAR_ID,
  LAYOUT_BODY_ID,
  FOOTER_ID,
  NAV_LINKS,
  ABOUT_ID,
  DONORS_ID,
  PROGRAMMES_ID,
  TEAM_ID,
  EXPERT_ID,
  WHAT_DO_WE_DO_ID,
};
