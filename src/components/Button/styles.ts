import styled from "styled-components";

interface IProps {
  variant: "primary" | "secondary";
}

export const ButtonContainer = styled.button<IProps>`
  border-radius: ${({ variant }) => (variant === "primary" ? "8px" : "1rem")};
  font-size: ${({ variant }) =>
    variant === "primary" ? "1.125rem" : "0.8rem"};
  text-transform: uppercase;
  font-weight: 300;
  color: #ffffff;
  gap: 1rem;
  line-height: 1.75rem;
  padding: ${({ variant }) => (variant === "primary" ? "0.625rem 0" : "1rem")};
  transition: 0.2s;
  height: ${({ variant }) => (variant === "primary" ? "3rem" : "2rem")};
  width: ${({ variant }) => (variant === "primary" ? "80%" : "25%")};
  border: ${({ variant }) =>
    variant === "primary" ? "none" : "1px solid #ffffff"};
  font-weight: ${({ variant }) => (variant === "primary" ? "400" : "bold")};
  background: ${({ variant }) =>
    variant === "primary"
      ? "-webkit-linear-gradient(right, #c0df40, #40b5cb)"
      : "transparent"};
  cursor: pointer;
  transition: border-color 0.25s;
  margin: ${({ variant }) => (variant === "primary" ? "2rem" : "0")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
