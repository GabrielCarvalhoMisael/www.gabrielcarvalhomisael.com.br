
import { Box, Container, Column, H1, H2 } from "./styles";

export function HeaderApresentation() {
  return (
    <Box>
      <Container>
        <Column>
          <div style={{textAlign: 'center'}}>
            <H1>Gabriel Carvalho Misael</H1>
            <H2>Developer, Web Designer</H2>
          </div>
        </Column>
      </Container>
    </Box>
  );
}