import styled, { css } from 'styled-components';

interface ColorProps {
  color: string;
}

export const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: flex;
    padding: 7px 18px;
    background: #e3e3e3;
    color: #18191a;
    border-radius: 46px;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #242526;
  border-radius: 6px;
  overflow: hidden;
  width: 303px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(20px);
  }
`;

export const CardImage = styled.div<ColorProps>`
  height: 292px;
  color: #fff;
  padding: 32px;

  p {
    width: 141px;
    line-height: 110%;
    margin-top: 5px;
  }

  ${props =>
    props.color === 'green'
      ? css`
          background-color: #0f9d58;
        `
      : css`
          background-color: #f4b400;
        `}
`;

export const CardName = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;

  span {
    width: 45px;
    height: 45px;
    background: #eeeeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    margin-right: 10px;
  }

  div {
    flex: 1;
  }
`;

export const InfoCard = styled.div`
  background: #242526;
  display: flex;
  padding: 28px;
  width: 350px;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 17px;

  span {
    min-width: 40px;
    height: 40px;
    font-size: 21px;
    background: #eeeeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-right: 18px;
    justify-content: center;
  }

  p {
    margin-top: 5px;
  }
`;

export const InfoWrapper = styled.div<ColorProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    padding: 14px 12px;
    border-radius: 4px;
    color: #fff;
    align-items: center;
    margin-top: 14px;
    font-weight: 500;

    ${props =>
      props.color === 'green'
        ? css`
            background-color: #144e33;
          `
        : css`
            background-color: #6f4c2d;
          `}
  }
`;
