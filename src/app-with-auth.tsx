import { AuthProvider } from "kubra-ui-lib-auth";
import { App, AppProps } from "app";

export const AppWithAuth = ({ analytics, basePath }: AppProps) => {
  return (
    <AuthProvider>
      <App analytics={analytics} basePath={basePath} />
    </AuthProvider>
  );
};
