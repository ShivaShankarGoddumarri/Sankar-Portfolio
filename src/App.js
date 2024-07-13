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
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
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
