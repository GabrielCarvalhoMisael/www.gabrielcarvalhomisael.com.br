import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  width: 100%;
  text-align: center;


  @media screen and (max-width: 900px) {
    flex-direction: Column;
  }
`;
export const Column = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  width: 100%;
  background: #FFF;
  /* border-right: dotted 2px #000; */
  .img{
    width: 200px;
    height: 180px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: Column;
    padding-top: 15px;
    border-bottom: dotted 2px #000;
  }

`;
export const Right = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  width: 100%;
  background: #FFF;
  border-right: solid 2px #000;
`;

export const Ul = styled.ul`
    /* display: flex;
    flex: 2; */
    /* gap: 100; */
    justify-content: 'center';
    list-style: none;
`;