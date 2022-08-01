import { Titulo } from "../Titulo";

export function NavLinks(props: any) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#home' text='Home' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#diplomas' text='Diplomas' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#idiomas' text='Idiomas' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#carreira' text='Carreira' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#project' text='Projetos' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#habilidades' text='Habilidades' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#habilidades' text='Escolaridade' />
      </li>
    </ul>
  );
}