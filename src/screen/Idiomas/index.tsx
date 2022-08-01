import { Center, Right, Ul, Column } from './styles';
import BandeiraBrasil from '../../images/BandeiraBrasil.png';
import english from '../../images/english.png';

export function Idiomas() {
  return (
    <div style={{textAlign: 'center', fontFamily: 'Edu VIC WA NT Beginner'}}>
            <h1>Idiomas</h1>
    <Center >
      <Column >
        <div>
          <h1 style={{ fontFamily: 'Roboto' }}>Português</h1>
          <img className='img' src={BandeiraBrasil} alt="" style={{ borderRadius: '9%' }} />
          <Ul>
            <li style={{ fontFamily: 'Roboto' }}>
              Nivel: Fluente
            </li>
          </Ul>
        </div>
      </Column>
      <Column>
        <div>
          <h1 style={{ fontFamily: 'Roboto' }}>English</h1>
          <img className='img' src={english} alt="" style={{ borderRadius: '9%' }} />
          <Ul>
            <li style={{ fontFamily: 'Roboto' }}>
              Nivel: Intermediario
            </li>
          </Ul>
        </div>
      </Column>
    </Center>
    </div>
  )
}