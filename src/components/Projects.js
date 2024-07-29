import React from 'react';
import styled, { keyframes} from 'styled-components';

const Projects = () => {
  const projectList = [
    {
      name: 'Emoji Game',
      description: 'It is a memory game developed by using React.',
      link: 'https://gameanil.ccbp.tech/'
    },
    {
      name: 'Jobby App',
      description: 'Jobby app where we can find perfect jobs.',
      link: 'https://jobanil.ccbp.tech/login'
    },
    {
        name: 'Todos App',
        description: 'Todos app where user can manage their tasks effectively.',
        link: 'https://taskanil.ccbp.tech/'
      },
      {
        name: 'Wikipedia App',
        description: 'Wikipedia purpose is to benefit readers by presenting information.',
        link: 'https://wikipediaapp393.ccbp.tech/'
      }
    
  ];

  return (
    <Section id="projects">
      <Container>
        <h2>Projects</h2>
        <ProjectGrid>
          {projectList.map((project, index) => (
            <ProjectCard key={index}>
               
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 0;
  background: #e0e0e0;
  border-bottom: 2px solid #333;
`;

const Container = styled.div`
  text-align: center;
  h2 {
    font-size: 2.5rem;
   
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  margin:10px;
`;
const moveStars = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -10000px 5000px;
  }
`;



const ProjectCard = styled.div`
  padding: 1rem;
  background: url('https://www.transparenttextures.com/patterns/stardust.png');
 animation: ${moveStars} 100s linear infinite;
 background-color: #001f3f;
 color:#ffffff;
 
  
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    margin: 0.5rem 0;
  }
  a {
    color: #333;
    text-decoration: underline;
    color:#ffffff;
  }
`;

export default Projects;
