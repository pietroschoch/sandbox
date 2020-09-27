import React from 'react';
import { FiPlay, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Box, PlayButton, ButtonWrapper, ProjectCard } from './styles';
import { Title, MainTitle } from '../../styles/types';

const Projects: React.FC = () => {
  return (
    <>
      <MainTitle>Projetos</MainTitle>
      <Box>
        <ProjectCard>
          <span role="img" aria-label="turtle">
            🐢
          </span>
          <Title>Tasks App</Title>
          <p>
            Nesse post conto mais sobre o processo de criação do tasks, meu app
            que está em testes (sempre vai estar)
          </p>
          <ButtonWrapper>
            <Link to="/posts/tasks">Ver processo</Link>
            <PlayButton href="https://tasks.sandbox.design/">
              <FiPlay />
              Testar
            </PlayButton>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <span role="img" aria-label="smileface">
            👩🏽‍🔬
          </span>
          <Title>Startup Weekend Woman</Title>
          <p>
            Um dos projetos mais legais que já participei na vida! Criamos uma
            startup em um fim de semana (spoiler: ganhamos a competição)
          </p>
          <ButtonWrapper>
            <Link to="/posts/startup">Ver como foi</Link>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <span role="img" aria-label="cart">
            🛒
          </span>
          <Title>Ecommerce Rp</Title>
          <p>
            Um dos freelas de mais reponsa que eu peguei: Fazer um protótipo de
            aplicativo de supermercado.
          </p>
          <ButtonWrapper>
            <Link to="/posts/ecommerce">Ver processo</Link>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <span role="img" aria-label="cart">
            🔤
          </span>
          <Title>Fonte brondby</Title>
          <p>
            Estou criando uma fonte! É um projeto que envolve muito amor por
            design gráfico e lagrimas (a letra s é muito difícil de desenhar)
          </p>
          <ButtonWrapper>
            <Link to="/posts/brondby">Ver processo</Link>
            <PlayButton href="https://tasks.sandbox.design/">
              <FiDownload />
              Baixar
            </PlayButton>
          </ButtonWrapper>
        </ProjectCard>
      </Box>
    </>
  );
};

export default Projects;
