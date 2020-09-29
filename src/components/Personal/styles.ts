import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  background-color: #242526;
  border-radius: 6px;
  padding: 40px;
  margin: 20px 0px 60px 0px;

  @media only screen and (max-width: 771px) {
    height: auto;
    margin: 55px 0px;
    flex-direction: column;
    align-items: center;
  }
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
  margin-right: 40px;
  border-right: 1px solid #434343;
  text-align: center;

  @media only screen and (max-width: 771px) {
    margin-right: 0px;
    margin-bottom: 30px;
    padding-right: 0px;
    padding-bottom: 30px;
    border-right: none;
    border-bottom: 1px solid #434343;
  }

  span {
    margin-top: 10px;
    line-height: 150%;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 771px) {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px;
    grid-template-rows: 60px 60px 60px;
    grid-column-gap: 9px;
    grid-row-gap: 9px;
  }

  span {
    margin: 9px 9px 0px 0px;
    width: 60px;
    height: 60px;
    background: #18191a;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    font-size: 36px;
    opacity: 1;
    position: relative;
    opacity: 0.4;

    div {
      display: none;
      position: absolute;
      font-size: 16px;
      background: #18191a;
      border-radius: 4px;
      width: 150px;
      z-index: 10;
      padding: 10px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      top: 70px;
      right: -104px;

      &:before {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid #18191a;
        left: 5px;
        top: -20px;
      }
    }

    &:hover {
      opacity: 1;

      div {
        display: block;
      }
    }
  }
`;
