import { A } from "./styles"

type ITitulo = {
  text: string;
  href: string;
}
export function Titulo(props: ITitulo){
  return(
    <div style={{textAlign: 'center'}}>
      <A href={props.href}>{props.text}</A>
    </div>
  )
}