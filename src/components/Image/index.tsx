import { Container, ImageContent } from "./styles";

interface Props {
  src?: string;
}

export default function Image({src = ""}: Props) {
  return (
    <Container>
      <ImageContent src={src} />
    </Container>
  );
}
