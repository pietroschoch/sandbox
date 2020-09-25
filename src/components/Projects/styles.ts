import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    display: flex;
    flex-direction: column;
    background: #242526;
    border-radius: 6px;
    padding: 35px;
    height: 400px;
    width: 400px;
    margin: 6px;
    border-top: 8px solid #242526;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

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
