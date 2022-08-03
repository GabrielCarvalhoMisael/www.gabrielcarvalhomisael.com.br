import { Center, Ul, Column, H1 } from './styles';
import CocaColaFemsa from '../../images/CocaColaFemsa.png';
import TectoyAutomacao from '../../images/TectoyAutomacao.png';
import CBDS from '../../images/CBDS.png';
import RsSolutions from '../../images/RsSolutions.png';

export function Carreira() {

  const arraycarreira = [
    {
      img: CocaColaFemsa,
      title: 'Coca-Cola Femsa',
      function: 'Jovem Aprendiz',
      periodo: 'De 2019 Á Fev 2020',
    },
    {
      img: TectoyAutomacao,
      title: 'TecToy Automação',
      function: 'Assistente de Desenvolvimento',
      periodo: 'De 2021 Á Fev 2022',
    },
    {
      img: CBDS,
      title: 'CBDS',
      function: 'Desenvolvedor Node Jr',
      periodo: 'Serviços Exporadicos',
    },
    {
      img: RsSolutions,
      title: 'Rs Solutions',
      function: 'Desenvolvedor Junior',
      periodo: 'Atual',
    }
  ]
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Edu VIC WA NT Beginner' }}>Carreira</h1>
      <Center >
        {arraycarreira.map((item, index) => {
          return (
            <Column>
              <div>
                <img src={item.img} alt="" />
                <H1>{item.title}</H1>
                <Ul>
                  <li>
                    {item.function}
                  </li>
                  <li>
                    {item.periodo}
                  </li>
                </Ul>
              </div>
            </Column>
          );
        })}
      </Center>
    </div>
  )
}