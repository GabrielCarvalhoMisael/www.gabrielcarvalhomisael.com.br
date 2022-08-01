import { Image } from './styles';
import imgHome from '../../../images/imgHome.png';
import imgHome600px from '../../../images/imgHome600px.png';
import imgHome300px from '../../../images/imgHome300px.png';
import useMediaQuery from '../../../hooks/useMediaQuery';


export function Img() {

  const isMinSreen900 = useMediaQuery('(min-width: 900px)');
  const isMaxSreen900 = useMediaQuery('(max-width: 900px)');
  const isMaxSreen600 = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {isMinSreen900 && <Image src={imgHome} />}
      {isMaxSreen900 && <Image src={imgHome600px} />}
      {isMaxSreen600 && <Image src={imgHome300px} />}
    </>
  )
}