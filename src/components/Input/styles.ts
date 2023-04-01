import styled from "styled-components";

export const InputContainer = styled.input`
  display: flex;
  margin: 2rem auto;
  height: 3rem;
  padding: 1rem;
  width: 40%;
  background-color: #fff;
  box-shadow: 0.625rem 0.625rem 1.875rem rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
