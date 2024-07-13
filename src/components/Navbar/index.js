/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {
  Link,
  // Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  // MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { SocialMediaIcon, ThemeMobileIcon } from "../HeroSection/HeroStyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";

// Define keyframes for the animations
const greentopBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;

const greenbottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;

// Wrap each FontAwesome icon and text in a container
const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  ${
    "" /* .active-icon {
    font-size: 26px;
    color: #854ce6;
    transition: all 0.3s ease;
  } */
  }
`;

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const theme = useTheme();

  useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: theme.logo,
              cursor: "pointer",
            }}
          >
            <FaCode size="2rem"  /> <Span>Sankar</Span>{" "}
          </a>
        </NavLogo>
        <MobileIcon>
          <ThemeMobileIcon
            style={{ cursor: "pointer", marginRight: "35px" }}
            title="Github"
            href={Bio.github}
            target="_blank"
          >
            <GitHubIcon style={{ width: "25px", height: "25px" }} />
          </ThemeMobileIcon>
        </MobileIcon>

        <MobileIcon>
          <ThemeMobileIcon
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            target="display"
            style={{ cursor: "pointer", marginRight: "15px" }}
          >
            {darkMode ? (
              <Brightness7Icon style={{ width: "25px", height: "25px" }} />
            ) : (
              <NightsStayIcon style={{ width: "25px", height: "25px" }} />
            )}
          </ThemeMobileIcon>
        </MobileIcon>

        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={50}
            onSetActive={() => setActiveSection("about")}
          >
            <NavLink className={activeSection === "about" ? "active" : ""}>
              <NavItemContainer>
                <span
                  className={activeSection === "about" ? "active-text" : ""}
                >
                  About
                </span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={50}
            onSetActive={() => setActiveSection("skills")}
          >
            <NavLink className={activeSection === "skills" ? "active" : ""}>
              <NavItemContainer>
                <span
                  className={activeSection === "skills" ? "active-text" : ""}
                >
                  Skills
                </span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={50}
            onSetActive={() => setActiveSection("experience")}
          >
            <NavLink className={activeSection === "experience" ? "active" : ""}>
              <NavItemContainer>
                <span
                  className={
                    activeSection === "experience" ? "active-text" : ""
                  }
                >
                  Experience
                </span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={50}
            onSetActive={() => setActiveSection("projects")}
          >
            <NavLink className={activeSection === "projects" ? "active" : ""}>
              <NavItemContainer>
                <span
                  className={activeSection === "projects" ? "active-text" : ""}
                >
                  Projects
                </span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={50}
            onSetActive={() => setActiveSection("education")}
          >
            <NavLink className={activeSection === "education" ? "active" : ""}>
              <NavItemContainer>
                <span
                  className={activeSection === "education" ? "active-text" : ""}
                >
                  Education
                </span>
              </NavItemContainer>
            </NavLink>
          </Link>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <GitHubIcon style={{ marginRight: "5px" }} />
            Github
          </GitHubButton>

          <SocialMediaIcon
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            target="display"
            style={{ cursor: "pointer" }}
          >
            {darkMode ? <Brightness7Icon /> : <NightsStayIcon />}
          </SocialMediaIcon>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMenu}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={toggleMenu}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={toggleMenu}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={toggleMenu}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={toggleMenu}>
              Education
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
