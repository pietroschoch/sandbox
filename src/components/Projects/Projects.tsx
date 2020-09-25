import React from 'react';
import { Box } from './styles';
import { MainTitle, Mini, SubTitle, Title } from '../../styles/types';

const Projects: React.FC = () => {
  return (
    <Box>
      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
        <span role="img">😁</span>
        <Title>Startup Weekend</Title>
        <p>muito bom pra ver como trabalho com projetos longos</p>
      </a>
    </Box>
  );
};

export default Projects;
