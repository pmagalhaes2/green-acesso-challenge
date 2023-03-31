import { ReactNode } from "react";
import { CardInfo } from "./styles";

interface Props {
  image?: string;
  title?: string;
  children?: ReactNode;
}

export default function Card({
  image = "https://github.com/rocketseat-education.png",
  title = "Card Title",
  children
}: Props) {
  return (
      <CardInfo>
        <img src={image} alt="" />
        <h2>{title}</h2>
        {children}
      </CardInfo>
  );
}
