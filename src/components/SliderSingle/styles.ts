import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
  width: 1200px;
  background: #FFF;
  text-align: center;

  @media screen and (max-width:   900px) {
    width: 600px;
  }

  @media screen and (max-width:   600px) {
    width: 300px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

`;

export const Column = styled.div`
  background: #000;
  height: 500px
`;