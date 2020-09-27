import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 771px) {
    display: none;
  }

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

  p {
    width: auto !important;
    line-height: 100% !important;
    margin-top: 0px !important;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 85vh;

  @media only screen and (max-width: 771px) {
    width: 100%;
    position: initial;
  }

  p {
    width: 200px;
    line-height: 150%;
    margin-top: 10px;

    @media only screen and (max-width: 771px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 0px;

  @media only screen and (max-width: 771px) {
    margin-bottom: 30px;
    border-bottom: 1px solid #424344;
    padding-bottom: 30px;
  }

  &:hover {
    svg {
      &:last-child {
        opacity: 1;
      }
    }
  }

  svg {
    margin: 0px 10px;
    transition: opacity 0.2s ease-in-out;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      opacity: 0;
    }
  }
`;
