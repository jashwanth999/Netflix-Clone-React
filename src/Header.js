import {
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  NavDropdown
} from "react-bootstrap";
import SimplePopover from "./Popover";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar style={{ display: "flex", flexDirection: "row" }} expand="lg">
      <Navbar.Brand href="#">
        <img
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
          style={{ height: 50 }}
          alt=""
        />
      </Navbar.Brand>

      <Nav.Link href="#action1" style={{ color: "white" }}>
        <SimplePopover />
      </Nav.Link>
      <Nav.Link href="#action2" style={{ color: "white" }}>
        Movies
      </Nav.Link>
    </Navbar>
  );
}
