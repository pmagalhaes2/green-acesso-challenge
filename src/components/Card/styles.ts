import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5rem;
  padding: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 10px #15cdcb;
  width: 380px;
  height: 450px;
  border-radius: 10px;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    max-width: 350px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-size: cover;

    @media (max-width: 768px) {
      background-size: contain;
      width: 150px;
    }
  }

  h2 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
