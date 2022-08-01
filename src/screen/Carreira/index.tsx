import { Center, Right, Ul, Column } from './styles';
import CocaColaFemsa from '../../images/CocaColaFemsa.png';
import TectoyAutomacao from '../../images/TectoyAutomacao.png';
import CBDS from '../../images/CBDS.png';
import RsSolutions from '../../images/RsSolutions.png';

/*
             <Ul>
                  <li style={{fontSize: '18px', fontFamily: 'Uchen'}}>
                        teste
                  </li>
                </Ul>
                */
export function Carreira() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Edu VIC WA NT Beginner' }}>
      <h1>Carreira</h1>
      <Center >
        <Column>
          <div>
            <img src={CocaColaFemsa} alt="" />
            <h1 style={{ fontFamily: 'Roboto', fontSize: '22px' }}>Coca-Cola Femsa</h1>
            <Ul>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                Função: Jovem Aprendiz
              </li>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                 DE 2019 Á Fev 2020
              </li>
            </Ul>
          </div>
        </Column>
        <Column>
          <div>
            <img src={TectoyAutomacao} alt="" />
            <h1 style={{ fontFamily: 'Roboto', fontSize: '22px' }}>TecToy Automação</h1>
            <Ul>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                Função: Assistente de Desenvolvimento
              </li>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                 DE 2021 Á Jan 2022
              </li>
            </Ul>
          </div>
        </Column>
        <Column>
          <div>
            <img src={CBDS} alt="" />
            <h1 style={{ fontFamily: 'Roboto', fontSize: '22px' }}>CBDS</h1>
            <Ul>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                Função: Desenvolvedor Java Jr
              </li>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                 DE 2022 Á 2022
              </li>
            </Ul>
          </div>
        </Column>
        <Column>
          <div>
            <img src={RsSolutions} alt="" />
            <h1 style={{ fontFamily: 'Roboto', fontSize: '22px' }}>Rs Solutions</h1>
            <Ul>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                Função: Desenvolvedor Junior
              </li>
              <li style={{ fontSize: '18px', fontFamily: 'Uchen' }}>
                 Atual
              </li>
            </Ul>
          </div>
        </Column>
      </Center>
    </div>
  )
}