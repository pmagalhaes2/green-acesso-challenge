import { ButtonContainer } from "./styles";

interface Props {
  title?: string;
  onClick?: () => void;
  type?: "button";
  id?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  title = "Button",
  onClick,
  type = "button",
  id,
  variant = "primary",
}: Props) {
  return (
      <ButtonContainer onClick={onClick} id={id} type={type} variant={variant}>
        {title}
      </ButtonContainer>
  );
}
