import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Loader from "./components/Loader/Loader.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      45deg,
      rgba(0, 173, 181, 0.1) 0%,
      rgba(0, 173, 181, 0.05) 50%,
      rgba(0, 173, 181, 0.02) 100%
    ),
    linear-gradient(
      135deg,
      rgba(0, 150, 158, 0.02) 0%,
      rgba(0, 150, 158, 0.05) 50%,
      rgba(0, 150, 158, 0.1) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);
`;

function App() {
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);  
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* {loading ? ( 
          <Loader />
        ) : ( */}
          <>
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
            <Body>
              <HeroSection />
              <Wrapper>
                <Skills />
                <Experience darkMode={darkMode} />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
              </Wrapper>
              <Wrapper>
                <ContactForm />
              </Wrapper>
              <Footer toggleTheme={toggleTheme} darkMode={darkMode} />
              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </Body>
          </>
        {/* )} */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
