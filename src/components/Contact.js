import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section id = "contact">
      <Container>
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to me through the following platforms:</p>
        <ContactInfo>
          <a href="https://www.linkedin.com/in/anil-bondala-kalwakurthy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/anilyadav393/anilmovies/tree/main/src" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
          </a>
          <a href="mailto:anilbondala393@gmail.com">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email" />
          </a>
        </ContactInfo>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c0c0c0;
`;

const Container = styled.div`
  text-align: center;
  h2 {
    font-size: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 1rem;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export default Contact;
