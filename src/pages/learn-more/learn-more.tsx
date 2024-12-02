import { useState } from "react";
import { ColumnTitle } from "components";
import {
  ContentPanel,
  ContentPanelHeader,
  ListNavigation,
  ListNavigationItem,
  TwoColumnLayout,
} from "kubra-ux-forge";
import {
  StyledDetailsPanelDiv,
  StyledLearMoreP,
} from "./styled-components/styled-learn-more";

interface Techonology {
  name: string;
  description: string;
  learnMoreUrl?: string;
}

const technologies: Techonology[] = [
  {
    name: "KUBRA UX Forge",
    description:
      "A library of KUBRA's reusable React components allowing customization through themes.",
    learnMoreUrl:
      "http://kubra-ux-forge.kubra.io.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "KUBRA React Auth",
    description: "An Auth Library for any Kubra React Project",
    learnMoreUrl: "https://github.com/iFactor/kubra-lib-react-auth",
  },
  {
    name: "KUBRA UI MFE",
    description: "A library with common code/components for KUBRA MFE",
    learnMoreUrl: "https://github.com/iFactor/kubra-ui-lib-mfe#documentation",
  },
  {
    name: "Front End Coding Standards and Best Practices",
    description:
      "Get yourself familiarized with KUBRA's standards and best practices for front end coding.",
    learnMoreUrl:
      "https://kubra.jira.com/wiki/spaces/FG/pages/142704832/DRAFT+-+Front+End+Coding+Standards+and+Best+Practices",
  },
  {
    name: "React, Typescript, React Router, React Query",
    description: "These are the foundational libraries",
    learnMoreUrl:
      "https://kubra.jira.com/wiki/spaces/FG/pages/253395413/Frontend+Technology+Stack#Foundational",
  },
  {
    name: "Jest, Reacting Testing Library, Mock Service Worker",
    description: "These are libraries used for testing your application.",
    learnMoreUrl:
      "https://kubra.jira.com/wiki/spaces/FG/pages/253395413/Frontend+Technology+Stack#Testing",
  },
  {
    name: "React Query",
    description:
      "For fetching, caching, synchronizing and updating server state",
    learnMoreUrl:
      "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
];

export const LearnMore = () => {
  const [technology, setTechonology] = useState<Techonology | undefined>();

  return (
    <TwoColumnLayout>
      <div>
        <ColumnTitle>Learn More</ColumnTitle>
        <ListNavigation>
          {technologies.map((tech) => (
            <ListNavigationItem
              key={tech.name}
              label={tech.name}
              onClick={() => setTechonology(tech)}
              selected={technology?.name === tech.name}
            />
          ))}
        </ListNavigation>
      </div>
      <div>
        {technology && (
          <>
            <ColumnTitle>Details</ColumnTitle>
            <StyledDetailsPanelDiv>
              <ContentPanel>
                <ContentPanelHeader
                  title={technology.name}
                  description={technology.description}
                />

                {technology.learnMoreUrl && (
                  <StyledLearMoreP>
                    <a
                      href={technology.learnMoreUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click here
                    </a>{" "}
                    to learn more.
                  </StyledLearMoreP>
                )}
              </ContentPanel>
            </StyledDetailsPanelDiv>
          </>
        )}
      </div>
    </TwoColumnLayout>
  );
};
