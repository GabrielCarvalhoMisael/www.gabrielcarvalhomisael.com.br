import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  height: 240px;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const H1 = styled.h1`
  font-family: 'Edu VIC WA NT Beginner';
  font-size: 50px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Roboto';
  font-size: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;