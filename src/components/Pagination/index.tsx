import { ReactNode } from "react";
import { PaginationContainer } from "./styles";

interface Props {
  children?: ReactNode;
}

export default function Pagination({ children }: Props) {
  return <PaginationContainer>{children}</PaginationContainer>;
}
