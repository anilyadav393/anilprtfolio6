import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Heading>Get in  
          <span>Touch</span>
          </Heading>
        <Text>
          Feel free to reach out if you have any questions or if you'd like to work together on a project!
        </Text>
        <ContactInfo>
          <InfoItem>
            <FaPhone />
            <InfoText>+91 9908912424</InfoText>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <InfoText>anilbondala393@gmail.com</InfoText>
          </InfoItem>
        </ContactInfo>
        <Icons>
          <IconLink href="https://www.linkedin.com/in/anil-bondala-kalwakurthy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/anilyadav393/anilmovies/tree/main/src" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="mailto:youremail@example.com">
            <FaEnvelope />
          </IconLink>
        </Icons>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 1rem;
  background: #f5f5f5;
  border-top: 2px solid #333;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: sky-blue;
  span{
  color:blue;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #333;

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

const InfoText = styled.span`
  font-size: 1.2rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 2rem;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #555;
    transform: scale(1.2);
  }
`;

export default Contact;
