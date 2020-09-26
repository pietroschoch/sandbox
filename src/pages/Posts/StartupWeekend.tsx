import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { HeaderBox, Header, Wrapper, MainIcon, Content } from './styles';
import { MainTitle, Title, SubTitle } from '../../styles/types';

const StartupWeekend: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Link to="/">
            <FiArrowLeft size={20} />
            <p>voltar</p>
          </Link>
          <HeaderBox />
        </Header>
        <Content>
          <MainIcon>
            <span role="img" aria-label="face">
              😁
            </span>
          </MainIcon>
          <MainTitle>startup weekend woman</MainTitle>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Title>essentially unchanged</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five.
          </p>
          <SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </SubTitle>
        </Content>
      </Wrapper>
    </>
  );
};

export default StartupWeekend;
