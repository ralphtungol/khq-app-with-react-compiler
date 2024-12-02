import styled from "styled-components";
import { theme } from "styled-tools";

export const StyledLayoutContainerDiv = styled.div`
  display: flex;
  width: 100vw;
`;

export const StyledNavigationDiv = styled.div`
  flex-grow: 0;
`;

export const StyledContentBodyDiv = styled.div`
  background-color: ${theme("forgeLib.neutral.99")};
  flex-grow: 1;
`;
