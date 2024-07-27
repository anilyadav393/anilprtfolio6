import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import resumeFile from '../assets/anil_2024-06-08-123641.pdf'; // Make sure to put your resume in the 'assets' folder

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Heading>
            <h1> Hello!  Iam Anil Yadav</h1>
            <p>Hi there! I'm Anil, a passionate and creative Full Stack Developer and having proficiency in MERN Stack</p>
          <AnimatedText>Full Stack Developer</AnimatedText>
          
        </Heading>
        <ButtonWrapper>
          <ResumeButton
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </ResumeButton>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
  border-bottom: 2px solid #333;
  position: relative;
`;

const Container = styled.div`
  text-align: center;
`;

const Heading = styled.div`
  margin-bottom: 2rem;
`;

const AnimatedText = styled.h1`
  font-size: 3rem;
  animation: move 0.5s infinite alternate;
  color: #333;

  @keyframes move {
    0% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(20px);
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const ResumeButton = styled.a`
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: #333;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

export default Home;
