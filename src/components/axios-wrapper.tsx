import { ReactElement } from "react";
import { useRequestOptions } from "hooks";

interface AxiosWrapperProps {
  children: ReactElement;
}

export const AxiosWrapper = ({ children }: AxiosWrapperProps) => {
  useRequestOptions();

  return children;
};
