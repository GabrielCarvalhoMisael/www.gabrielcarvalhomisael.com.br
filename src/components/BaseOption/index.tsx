import { Box, Container, Column, Button } from "./styles";
import { BsDownload, BsFillShareFill } from "react-icons/bs";

export function BaseOption() {
  const shareData = {
    title: "Curriculo Online Gabriel Misael",
    text: "Curriculo Desenvolvedor Gabriel Misael",
    url: "https://gabrielcarvalhomisael.com.br",
  };
  return (
    <Box>
      <Container>
        <Column>
          <Button>
            {" "}
            <BsDownload size={25} color={"#FFF"} />
          </Button>
        </Column>
        <Column>
          <Button onClick={async () => await navigator.share(shareData)}>
            <BsFillShareFill size={25} color={"#FFF"} />
          </Button>
        </Column>
      </Container>
    </Box>
  );
}
