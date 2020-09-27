import styled from 'styled-components';
import { shade } from 'polished';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #242526;
  border-radius: 6px;
  padding: 35px;
  width: 400px;
  margin: 6px;
  border-top: 8px solid #242526;
  /* transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    } */

  span {
    width: 35px;
    height: 35px;
    background: #eeeeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  h2 {
    margin-bottom: 5px;
  }
`;

export const InfoCard = styled.div`
  background: #242526;

  span {
    width: 25px;
    height: 25px;
    background: #eeeeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PlayButton = styled.a`
  text-decoration: none;
  background-color: #4285f4 !important;
  padding: 14px 12px !important;
  font-weight: 600;
  border-radius: 4px;
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex: 0 !important;

  &:hover {
    background-color: ${shade(0.2, '#4285f4')} !important;
  }

  svg {
    margin-right: 7px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  a {
    text-decoration: none;
    background-color: #293345;
    padding: 14px 12px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;
    color: #4285f4;
    margin: 0px 10px 0px 0px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${shade(0.2, '#293345')};
    }
  }
`;
