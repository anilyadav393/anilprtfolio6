import React from 'react';
import styled from 'styled-components';
import photo from '../assets/anil.png';



const About = () => {
  return (
    <Section id="about">
      <Container>
        <h2>About Me</h2>
        <p>Hi,I'm B. Anil yadav, a passionate and dedicated developer with a strong background in web development.
       
        I have a knack for problem-solving and enjoy tackling challenging projects that push my skills to next level.
        My expertise lies in HTML, CSS, Javascript, React, Node.js. I am constantly learning and keeping up-to-date with latest industry trends to ensure i deliver cutting-edge solutions.</p>
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
margin-left:5px;
margin-right;5px;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    color:dark-blue;

  }
    p{
    color:light-blue;
    font-weight:bold;
    margin-left:8px;
margin-right;8px;
padding:10px;

    }
    img{
    height : 300px;
    width:270px;
    border-radius:4px;
    }
`;

export default About;
