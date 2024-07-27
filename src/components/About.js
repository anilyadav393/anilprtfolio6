import React from 'react';
import styled from 'styled-components';
import photo from '../assets/anil.png';



const About = () => {
  return (
    <Section id="about">
      <Container>
        <h2>About Me</h2>
        <p>Hi Everyone, My name is Anil yadav and I am from Kalwakurthy, Telangana. I have completed my Bachelors Degree in Electronics and Communication from Avn Institute of Engineering and Technology.</p>
        <img alt = "Anil-img" src = {photo}/>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 0;
  background: #f0f0f0;
  border-bottom: 2px solid #333;
`;

const Container = styled.div`
  text-align: center;
  h2 {
    font-size: 2.5rem;

  }
    p{
    color:dark-blue;
    }
    img{
    height : 300px;
    width:270px;
    border-radius:4px;
    }
`;

export default About;
