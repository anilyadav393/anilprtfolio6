import React from 'react';
import styled,  { keyframes}  from 'styled-components';

const skills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { name: 'C-language', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/2560px-C_Programming_Language.svg.png' },
];

const Skills = () => {
  return (
    <Section id = "skills">
      <Container>
        <h2>Skills</h2>
        <SkillGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <img src={skill.logo} alt={`${skill.name} logo`} />
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </SkillGrid>
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




const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  
  margin:10px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 50px;
    height: 50px;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

export default Skills;
