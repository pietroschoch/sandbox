import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Box, PlayButton, ButtonWrapper, ProjectCard } from './styles';
import { Title, MainTitle } from '../../styles/types';

const Projects: React.FC = () => {
  return (
    <>
      <MainTitle>Projetos</MainTitle>
      <Box>
        <ProjectCard>
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
          <ButtonWrapper>
            <Link to="/posts/startupweekend">Como aconteceu</Link>
            <PlayButton>
              testar
              <FiPlay />
            </PlayButton>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
          <ButtonWrapper>
            <Link to="/posts/startupweekend">Como aconteceu</Link>
            <PlayButton>
              testar
              <FiPlay />
            </PlayButton>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
          <ButtonWrapper>
            <Link to="/posts/startupweekend">Como aconteceu</Link>
            <PlayButton>
              testar
              <FiPlay />
            </PlayButton>
          </ButtonWrapper>
        </ProjectCard>
      </Box>
    </>
  );
};

export default Projects;
