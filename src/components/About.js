import React from 'react';
import styled from 'styled-components';
import photo from '../assets/anil.png'

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Heading>About Me</Heading>
        <Content>
          <Image src= {photo} alt="Profile" />
          <Text>
            <Paragraph>
              Hi, I'm Anil, a passionate web developer with a love for creating dynamic and responsive web applications. I have a strong background in HTML, CSS, JavaScript, and React, and I'm always eager to learn new technologies and improve my skills.
            </Paragraph>
            <Paragraph>
              My journey into web development began when I created my first website in high school. Since then, I've been fascinated by the endless possibilities of the web. Here are a few things about me:
            </Paragraph>
            <List>
              <ListItem>I love coding and solving complex problems.</ListItem>
              <ListItem>I'm a enthusiastic about exploring new technologies.</ListItem>
              <ListItem>In my free time, I enjoy by making the reels in Instagram.</ListItem>
            </List>
          </Text>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f5f5f5;
  border-bottom: 2px solid #333;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  max-width: 600px;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #555;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: #555;

  li {
    margin-bottom: 0.5rem;
  }
`;

const ListItem = styled.li`
  font-size: 1rem;
`;

export default About;
