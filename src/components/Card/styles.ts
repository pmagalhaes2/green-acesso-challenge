import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5rem;
  padding: 5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 10px #15CDCB;
  width: 380px;
  height: 450px;
  border-radius: 10px;
  padding: 2rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-size: cover;
  }

  h2 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 10px 0;
    font-weight: 500;
    margin: 1.5rem;
    text-align: center;
  }
`;
