
import { Box, Container, Column, Button } from "./styles";
import { BsDownload, BsFillShareFill } from 'react-icons/bs';

export function BaseOption() {
  return (
    <Box>
      <Container>
        <Column>
          <Button> <BsDownload size={25} color={'#FFF'} /></Button>
        </Column>
        <Column>
          <Button><BsFillShareFill size={25} color={'#FFF'} /></Button>
        </Column>
      </Container>
    </Box>
  );
}