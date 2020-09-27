import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ColorProps {
  color: string;
}

export const HeaderBox = styled.div`
  background-color: #1c2430;
  width: 700px;
  height: 125px;
  border-radius: 6px;

  @media only screen and (max-width: 771px) {
    display: none;
  }
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

    @media only screen and (max-width: 771px) {
      left: 0;
      margin-top: 10px;
    }

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
  padding-bottom: 100px;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  position: relative;
  padding-top: 60px;

  @media only screen and (max-width: 771px) {
    width: 100%;
    padding-top: 180px;
  }

  img {
    width: 100%;
    margin: 10px 0px;
  }

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

  li {
    margin: 10px 0px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 10px 0px;

  @media only screen and (max-width: 771px) {
    flex-wrap: wrap;

    a {
      margin: 10px 0px;
    }
  }
`;

export const Button = styled.a<ColorProps>`
  padding: 14px 12px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 4px;

  ${props =>
    props.color === 'green' &&
    css`
      background-color: #144e33;

      &:hover {
        background-color: ${shade(0.2, '#144e33')};
      }
    `}

  ${props =>
    props.color === 'black' &&
    css`
      background-color: #242526;

      &:hover {
        background-color: ${shade(0.2, '#242526')};
      }
    `}

    ${props =>
    props.color === 'blue' &&
    css`
      background-color: #4285f4;

      &:hover {
        background-color: ${shade(0.2, '#4285F4')};
      }
    `}

  svg {
    margin-right: 10px;
  }
`;
