import React from 'react';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { Navigation, Box, SocialButton } from './styles';
import { Mini, Title } from '../../styles/types';

const Sidebar: React.FC = () => {
  return (
    <Box>
      <div>
        <Title>sandbox</Title>
        <p>
          Meu nome é Pietro, bem vindo ao sandbox, meu portifólio e futuramente
          plataforma de design. Tudo aqui é experimental e está em constante
          teste
        </p>
      </div>

      <div>
        <Navigation>
          <div />
          <span />
          <Mini>PROJETOS</Mini>
        </Navigation>
        <Navigation>
          <div />
          <span />
          <Mini>APPS</Mini>
        </Navigation>
        <Navigation>
          <div />
          <span />
          <Mini>MÓDULOS</Mini>
        </Navigation>
        <Navigation>
          <div />
          <span />
          <Mini>PESSOAL</Mini>
        </Navigation>
      </div>
      <SocialButton href="https://github.com/pietroschoch/">
        <FiGithub />
        github
        <FiArrowRight />
      </SocialButton>
    </Box>
  );
};

export default Sidebar;
