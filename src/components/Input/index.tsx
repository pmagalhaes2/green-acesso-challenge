import { InputContainer } from "./styles";

interface Props {
  placeholder?: string;
}
export default function Input({ placeholder = "Placeholder" }: Props) {
  return <InputContainer placeholder={placeholder}></InputContainer>;
}
