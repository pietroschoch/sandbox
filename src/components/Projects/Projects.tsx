import React from 'react';
import { Box } from './styles';
import { Title, MainTitle } from '../../styles/types';

const Projects: React.FC = () => {
  return (
    <>
      <MainTitle>Projetos</MainTitle>
      <Box>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <span role="img" aria-label="smileface">
            😁
          </span>
          <Title>Startup Weekend</Title>
          <p>muito bom pra ver como trabalho com projetos longos</p>
        </a>
      </Box>
    </>
  );
};

export default Projects;
