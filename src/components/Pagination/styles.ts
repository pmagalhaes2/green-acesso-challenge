import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  button {
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: transparent;
    color: #ffffff;

    :focus{
      border: 3px solid #15CDCB;
    }
  }
`;