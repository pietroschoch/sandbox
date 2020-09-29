import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ColorProps {
  color: string;
}

interface DashProps {
  dashed: boolean;
}

export const Box = styled.div`
  height: auto;
  display: flex;
  margin: 150px 0px;
  flex-direction: column;
  justify-content: center;
  line-height: 120%;

  @media only screen and (max-width: 771px) {
    height: auto;
    margin: 55px 0px;
  }

  a {
    display: flex;
    padding: 7px 18px;
    background: #e3e3e3;
    color: #18191a;
    border-radius: 46px;
    align-items: center;

    &:hover {
      background-color: ${shade(0.1, '#e3e3e3')};
    }

    svg {
      margin-left: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 771px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #242526;
  border-radius: 6px;
  overflow: hidden;
  width: 330px;
  /* transition: transform 0.2s ease-in-out; */

  @media only screen and (max-width: 771px) {
    margin-bottom: 17px;
  }

  /* &:hover {
    transform: translateX(20px);
  } */
`;

export const CardImage = styled.div<ColorProps>`
  height: 292px;
  color: #fff;
  padding: 32px;

  p {
    width: 141px;
    line-height: 110%;
    margin-top: 10px;
  }

  ${props =>
    props.color === 'green'
      ? css`
          background-color: #0f9d58;
          &:hover {
            background-color: ${shade(0.1, '#0f9d58')};
          }
        `
      : css`
          background-color: #f4b400;
          &:hover {
            background-color: ${shade(0.1, '#f4b400')};
          }
        `}
`;

export const CardName = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;

  p {
    margin-bottom: 5px;
  }

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
    text-align: center;
    vertical-align: middle;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoCard = styled.div<DashProps>`
  background: #242526;
  display: flex;
  padding: 28px;
  width: 330px;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 17px;

  ${props =>
    props.dashed &&
    css`
      background: #18191a;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23333' stroke-width='5' stroke-dasharray='6%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    `}

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
    font-weight: 600;
    transition: background-color 0.2s;

    ${props =>
      props.color === 'green'
        ? css`
            background-color: #144e33;

            &:hover {
              background-color: ${shade(0.2, '#144e33')};
            }
          `
        : css`
            background-color: #6f4c2d;

            &:hover {
              background-color: ${shade(0.2, '#6f4c2d')};
            }
          `}
  }
`;
