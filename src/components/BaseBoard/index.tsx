import { Box, Container, Column } from "./styles";
import { BsFacebook, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

export function BaseBoard() {
    return (
        <Box>
            <Container>
                <Column>
                    <a href="https://github.com/GabrielMisaelC">
                        <BsGithub size={30} color={'#DCDCDC'} />
                    </a>
                </Column>
                <Column>
                    <a href="https://www.facebook.com/biel.carvalhosimpson">
                        <BsFacebook size={30} color={'#DCDCDC'} />
                    </a>
                </Column>
                <Column>
                    <a href="https://instagram.com/xv_misael?r=nametag">
                        <FaInstagram size={30} color={'#DCDCDC'} />
                    </a>
                </Column>
                <Column>
                    <a href="https://www.linkedin.com/in/gabriel-carvalho-misael">
                        <BsLinkedin size={30} color={'#DCDCDC'} />
                    </a>
                </Column>
                <Column>
                    <a href="https://api.whatsapp.com/send?phone=5511984506890&text=Olá,%20Gostaria%20de%20Mais%20Informações">
                        <BsWhatsapp size={30} color={'#DCDCDC'} />
                    </a>
                </Column>
            </Container>
        </Box>
    );
}