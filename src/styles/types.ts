import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #e9e9e9;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #e9e9e9;
`;

export const SubTitle = styled.h3`
  font-size: 21px;
  font-weight: 500;
  color: #e9e9e9;
`;

export const Mini = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #fff;
  line-height: 9px;
  letter-spacing: 0.2em;
`;

export const Description = styled.p`
  width: 400px;
  margin-bottom: 30px;
  margin-top: 10px;

  @media only screen and (max-width: 771px) {
    width: 100%;
  }
`;
