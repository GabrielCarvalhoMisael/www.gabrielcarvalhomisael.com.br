import { Center, Right, Ul, Column } from './styles';
import BandeiraBrasil from '../../images/BandeiraBrasil.png';
import english from '../../images/english.png';

export function Projetos() {
  return (
    <div style={{textAlign: 'center', fontFamily: 'Edu VIC WA NT Beginner'}}>
            <h1>Projetos</h1>
    <Center >
      <Column >
        <h1>Projeto 1</h1>
      </Column>
      <Column>
        <h1>Projeto 2</h1>
      </Column>
    </Center>
    </div>
  )
}