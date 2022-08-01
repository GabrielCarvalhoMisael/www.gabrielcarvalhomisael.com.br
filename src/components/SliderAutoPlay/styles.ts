import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
  width: 100%;
  height: 450px;
  background: #FFF;
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 250px;
  /* height: 450px; */
  cursor: pointer;

  .imgCertificado{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .hr{
    border: 2px solid #191970;
    width: 40%;
  }
`;

