import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  div {
    width: 7px;
    height: 7px;
    border: 1px solid #fff;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
  }

  span {
    background: #fff;
    height: 1px;
    width: 30px;
    margin-right: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;

  p {
    width: 120px;
  }
`;
