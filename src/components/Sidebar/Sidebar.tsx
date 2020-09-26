import React from 'react';
import { Navigation, Box } from './styles';
import { Mini, Title } from '../../styles/types';

const Sidebar: React.FC = () => {
  return (
    <Box>
      <div>
        <Title>sandbox</Title>
        <p>Meu nome é pietro, bem vindo ao meu portifólio</p>
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
    </Box>
  );
};

export default Sidebar;
