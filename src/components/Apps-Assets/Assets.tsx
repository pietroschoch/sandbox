import React from 'react';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import {
  Box,
  Card,
  CardImage,
  CardName,
  InfoCard,
  InfoWrapper,
  Wrapper,
} from './styles';
import {
  MainTitle,
  Mini,
  SubTitle,
  Title,
  Description,
} from '../../styles/types';

const Assets: React.FC = () => {
  return (
    <Box>
      <MainTitle>modulos</MainTitle>
      <Description>
        baiwe modulos de design ewclusivos criados por mim (futuramente assets
        de outros designers). Todos os itens estão em fase de desenvolvimento e
        seu feedback é muito importante para a melhora!
      </Description>
      <Wrapper>
        <Card>
          <CardImage color="orange">
            <Title>font | brondby</Title>
            <p>fonte circular, que inclusive é essa que você esta vendo.</p>
          </CardImage>
          <CardName>
            <span>🔤</span>
            <div>
              <Mini>ASSET</Mini>
              <SubTitle>brondby</SubTitle>
            </div>
            <a href="">
              baixar
              <FiArrowDown size={12} />
            </a>
          </CardName>
        </Card>
        <InfoWrapper color="orange">
          <InfoCard>
            <span>👀</span>
            <div>
              <SubTitle>daqui a pouco tem mais</SubTitle>
              <p>mais ferramentas estão por vir, então fica de olho</p>
            </div>
          </InfoCard>
          <InfoCard>
            <span>😝</span>
            <div>
              <SubTitle>fala comigo!</SubTitle>
              <p>quer passar um feedback, sugestão ou só conversar?</p>
            </div>
          </InfoCard>
          <a href="">
            mandar feedback
            <FiArrowRight size={12} />
          </a>
        </InfoWrapper>
      </Wrapper>
    </Box>
  );
};

export default Assets;
