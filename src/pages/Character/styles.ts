import styled from "styled-components";

export const CharacterDetailsCard = styled.div`
  padding: 2rem 3rem;
  box-shadow: 1px 1px 10px #15cdcb;
  border-radius: 10px;
  width: 40%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem auto;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    padding: 1rem 2rem;
    gap: 1.5rem;
  }
`;

export const TitleAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
  }

  h1 {
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  img {
    width: 12.5rem;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 75%;
      background-size: contain;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  p {
    color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
