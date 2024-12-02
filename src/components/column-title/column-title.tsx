import { PropsWithChildren } from "react";
import { StyledColumnTitleDiv } from "./styled-components/styled-column-title";

export const ColumnTitle = ({ children }: PropsWithChildren) => (
  <StyledColumnTitleDiv>{children}</StyledColumnTitleDiv>
);
