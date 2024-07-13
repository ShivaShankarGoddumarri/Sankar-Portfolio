import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
    });
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title  data-aos="zoom-in-down">PROJECTS</Title>
        <CardContainer data-aos="zoom-in-down">
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}  key={project.id} />
          ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}  key={project.id} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;