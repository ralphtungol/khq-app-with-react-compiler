import { Spinner } from "kubra-ux-forge";
import { StyledFullPageLoaderDiv, StyledPageLoaderDiv } from "./styled-components/styled-page-loader";

export const PageLoader = () => (
  <StyledPageLoaderDiv>
    <Spinner size="large" variant="primary" />
  </StyledPageLoaderDiv>
);

export const FullPageLoader = () => (
  <StyledFullPageLoaderDiv>
    <Spinner size="large" variant="primary" />
  </StyledFullPageLoaderDiv>
);
