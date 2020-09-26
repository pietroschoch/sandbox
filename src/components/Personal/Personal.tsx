import React from 'react';
import { Box, User, BadgeWrapper } from './styles';
import { MainTitle, Title } from '../../styles/types';
import AvatarPhoto from '../../assets/pietro.jpg';

const Personal: React.FC = () => {
  return (
    <>
      <MainTitle>euzinho</MainTitle>
      <Box>
        <User>
          <img src={AvatarPhoto} alt="pietro" />
          <Title>pietro schoch</Title>
          <span role="img" aria-label="like">
            olá 🤙🏽, sou designer e gosto muito de programação, espero que tenha
            gostado do meu espaço
          </span>
        </User>
        <div>
          <Title>fatos interessantes</Title>
          <BadgeWrapper>
            <span role="img" aria-label="mustache">
              👨🏾
              <div>Cultivo um bigodon, e gosto muito dele</div>
            </span>
            <span role="img" aria-label="brocolis">
              🥦
              <div>Sou vegetariano e intolerante a lactose</div>
            </span>
            <span role="img" aria-label="popcorn">
              🍿
              <div>Sei fazer uma pipoca doce muito boa</div>
            </span>
            <span role="img" aria-label="car">
              🚘
              <div>Namoro a distância desde 2016</div>
            </span>
            <span role="img" aria-label="guitar">
              🎸
              <div>Toco baixo e guitarra, mas nenhum dos dois bem kkk</div>
            </span>
            <span role="img" aria-label="box">
              📦
              <div>Sei empacotar produto que é uma beleza</div>
            </span>
            <span role="img" aria-label="college">
              🎓
              <div>Estudo design gráfico na UTFPR</div>
            </span>
            <span role="img" aria-label="dog">
              🐕‍🦺
              <div>Tenho uma cadela muito linda</div>
            </span>
            <span role="img" aria-label="cross">
              ✝️
              <div>Gosto muito de Jesuszão</div>
            </span>
            <span role="img" aria-label="dog">
              🦷
              <div>Nasci sem os sisos</div>
            </span>
            <span role="img" aria-label="dog">
              💪🏽
              <div>To fazendo academia</div>
            </span>
            <span role="img" aria-label="dog">
              🚩
              <div>Sou torcedor do internacional</div>
            </span>
            <span role="img" aria-label="dog">
              👨🏽‍💻
              <div>Sou ouro 1 no lol - RaidMax</div>
            </span>
            <span role="img" aria-label="dog">
              🏠
              <div>Tenho 2 irmãos e sou o mais velho</div>
            </span>
            <span />
            <span />
            <span />
            <span />
          </BadgeWrapper>
        </div>
      </Box>
    </>
  );
};

export default Personal;
