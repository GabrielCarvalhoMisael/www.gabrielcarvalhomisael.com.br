import {Image} from './styles';


type IImage = {
  src: string;
}
export function Img(props: IImage){
  return(
    <>
    <Image  src={props.src} />
    </>
  )
}