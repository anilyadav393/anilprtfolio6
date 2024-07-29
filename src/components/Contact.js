import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Heading>Contact Me</Heading>
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
          <IconLink href="https://github.com/anilyadav393/anilprtfolio5" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="mailto:youremail@example.com">
            <FaEnvelope />
          </IconLink>
        </Icons>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows="4" required />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </Form>
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
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
  margin-bottom: 2rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

export default Contact;
