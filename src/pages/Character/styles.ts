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
`;

export const TitleAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h1 {
    color: #ffffff;
  }

  img {
    width: 12.5rem;
    border-radius: 50%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
