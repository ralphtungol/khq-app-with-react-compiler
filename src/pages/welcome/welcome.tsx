import { KubraIcon } from "components";
import { StyledWelcomeContainerDiv } from "./styled-components/styled-welcome";

export const Welcome = () => {
  return (
    <StyledWelcomeContainerDiv>
      <KubraIcon />
      <p>Welcome to KUBRA MFE</p>
      <>
        <div>
          <a
            href="http://kubra-ux-forge.kubra.io.s3-website-us-east-1.amazonaws.com/"
            rel="noreferrer"
            target="_blank"
          >
            Forge Component Library
          </a>
        </div>
        <div>
          <a
            href="https://kubra.jira.com/wiki/spaces/FG/pages/187367577/DRAFT+-+Micro+Frontends"
            rel="noreferrer"
            target="_blank"
          >
            MFE Documentation
          </a>
        </div>
        <div>
          <a
            href="https://tanstack.com/query/latest/docs/framework/react/overview"
            rel="noreferrer"
            target="_blank"
          >
            React Query Documentation
          </a>
        </div>
      </>
    </StyledWelcomeContainerDiv>
  );
};
