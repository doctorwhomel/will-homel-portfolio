import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import WHLogo from "../app/assets/img/WHLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark sticky="top" expand="md" className="flex-column">
      <NavbarBrand href="/">
        <img
          src={WHLogo}
          alt="WHLogo"
          style={{ scale: "100%", padding: "0" }}
        />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="me-2" />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/games">
              Games and Animation
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/videos">
              Film and Video
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/photos">
              Photography
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
