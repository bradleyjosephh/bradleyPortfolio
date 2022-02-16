import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, NavbarText, Collapse } from 'reactstrap'
import React, {useState} from 'react';

const Header = (props) => {
    const [isReady, setIsReady] = useState(false);
  
    const toggle = () => setIsReady(!isReady);
  
    const onLinkClick = props.onLinkClick;
    
    return (
      <>
        <Navbar
          color="success"
          expand="md"
          fixed="top"
          dark
        >
          <NavbarBrand>
            Bradley Hankus
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isReady={isReady} onClick={toggle} navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink onClick={onLinkClick} id="about">
                  About Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onLinkClick} id="portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onLinkClick} id="contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="git" href="https://github.com/bradleyjosephh">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="resume" href="https://docs.google.com/document/d/e/2PACX-1vSAchPuA7541aPMZB3ntiGGCM62w5cBg5DKZYtD1f6nokIBXp6HI7GEdrsdVzCPEbp58cegzIEmkUEV/pub">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="LinkedIn" href="https://www.linkedin.com/in/bradley-hankus-a76ab491/">
                  LinkedIn
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              Full Stack Web Developer
            </NavbarText>
          </Collapse>
        </Navbar>
      </>
    )
  }
  
  export default Header