import styled from "styled-components";

export const StyledClientsWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  line-height: 3rem;
  width: 100%;
  gap: 1.6rem;

  && p {
    font-size: 2.4rem;
  }
`;

export const StyledClientsListWrapper = styled.div`
  max-height: 60rem;
  overflow: auto;
`;
