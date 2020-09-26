import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
  Box,
  Card,
  CardImage,
  CardName,
  InfoCard,
  Wrapper,
  InfoWrapper,
} from './styles';
import {
  MainTitle,
  Mini,
  SubTitle,
  Title,
  Description,
} from '../../styles/types';

const Projects: React.FC = () => {
  return (
    <Box>
      <MainTitle>apps</MainTitle>
      <Description>
        a ideia aqui é criar uma serie de apps para me ajudar no dia a dia e
        disponibilizar elas para outras pessoas. Então se você começar a usar,
        me da um feedback para criamos um produto melhor :)
      </Description>
      <Wrapper>
        <Card>
          <CardImage color="green">
            <Title>tasks app</Title>
            <p>
              simples e prático, controle suas tarefas do dia a dia no tasks.
            </p>
          </CardImage>
          <CardName>
            <span role="img" aria-label="turtle">
              🐢
            </span>
            <div>
              <Mini>TOOL</Mini>
              <SubTitle>tasks</SubTitle>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?">
              usar agora
              <FiArrowRight size={12} />
            </a>
          </CardName>
        </Card>
        <InfoWrapper color="green">
          <InfoCard dashed>
            <span role="img" aria-label="eyes">
              👀
            </span>
            <div>
              <SubTitle>daqui a pouco tem mais</SubTitle>
              <p>mais ferramentas estão por vir, então fica de olho</p>
            </div>
          </InfoCard>
          <InfoCard dashed={false}>
            <span role="img" aria-label="face">
              😝
            </span>
            <div>
              <SubTitle>fala comigo!</SubTitle>
              <p>quer passar um feedback, sugestão ou só conversar?</p>
            </div>
          </InfoCard>
          <a href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?">
            mandar feedback
            <FiArrowRight size={12} />
          </a>
        </InfoWrapper>
      </Wrapper>
    </Box>
  );
};

export default Projects;
