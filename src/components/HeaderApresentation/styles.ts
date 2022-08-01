import styled from 'styled-components';

export const Box = styled.footer`
background: #FFF;
bottom: 0;
width: 100%;
height: 100px;
`;

export const H1 = styled.h1`
  font-family: 'Edu VIC WA NT Beginner';
  font-size: 30px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Roboto';
  font-size: 14px;
`;

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
cursor: pointer;
`;

export const Button = styled.button`
  background-color: #000;   
  border: 0;
  font-family: Staatliches;
  font-size: 20px;
  border-radius: 50px;
  padding: 6px 12px;
  width: 250px;
  height: 40px;
  color: #FFF;
  font-family: 'Roboto';

  &:hover {
    background-color: #191970;
  }

  @media screen and (max-width: 900px) {
    width: 130px;
  }
`;