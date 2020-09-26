import styled from 'styled-components';

export const HeaderBox = styled.div`
  background-color: #1c2430;
  width: 700px;
  height: 125px;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;

  a {
    position: absolute;
    margin-right: 820px;
    margin-top: 110px;
    display: flex;
    align-items: center;

    &:hover {
      p {
        opacity: 1;
      }
    }

    p {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MainIcon = styled.span`
  span {
    font-size: 26px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -90px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  position: relative;
  padding-top: 60px;

  h2 {
    margin-top: 20px;
  }

  h3 {
    margin-top: 15px;
  }

  p {
    line-height: 140%;
    margin: 10px 0px;
  }
`;
