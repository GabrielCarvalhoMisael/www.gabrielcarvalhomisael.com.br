import { Container, Row, Column, H1, H2 } from './styles';
import { Img } from '../Image';
import fotoPerfil from '../../images/fotoPerfil.jpeg';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MobileNavigation } from '../Menu/mobileNavigation';

export function Header() {

  const isSreen900 = useMediaQuery('(max-width: 900px)');

  return (
    <Container>
      <Row>
        <Column>
          <Row style={{
            gap: 100,
            justifyContent: 'center',
          }}>
            <Img src={fotoPerfil} />
          </Row>
        </Column>
        {!isSreen900 && <Column>
          <div style={{textAlign: 'center'}}>
            <H1>Gabriel Carvalho Misael</H1>
            <H2>Developer Junior, Front-end and Backend</H2>
          </div>
        </Column>}
        {isSreen900 && <MobileNavigation />}
      </Row>
    </Container>
  )
}
