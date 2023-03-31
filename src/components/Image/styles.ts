import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  width: 60%;

  @media (max-width: 480px) {
    padding: 3rem;
    width: 100%;
  }
`;

export const ImageContent = styled.img`
  width: 60%;

  @media (min-width: 425px) {
    width: 100%;
  }
`;
