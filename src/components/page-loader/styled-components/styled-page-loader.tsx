import styled from "styled-components";

export const StyledPageLoaderDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledFullPageLoaderDiv = styled(StyledPageLoaderDiv)`
  height: calc(100vh - 5.6rem);
`;
