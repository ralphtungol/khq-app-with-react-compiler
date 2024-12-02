import { BrowserRouter } from "react-router-dom";
import { AnalyticsInstance } from "analytics";
import { useKubraTracking } from "kubra-ui-lib-mfe";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes";
import { AxiosWrapper } from "components";

export interface AppProps {
  basePath?: string;
  analytics?: AnalyticsInstance;
}

const queryClient = new QueryClient();

export const App = ({ basePath, analytics }: AppProps): JSX.Element => {
  const { Track } = useKubraTracking({
    commonTrackingData: { mfe: "khq-app-with-react-compiler" },
    analytics,
  });

  return (
    <Track>
      <QueryClientProvider client={queryClient}>
        <AxiosWrapper>
          <BrowserRouter basename={basePath}>
            <AppRoutes />
          </BrowserRouter>
        </AxiosWrapper>
      </QueryClientProvider>
    </Track>
  );
};
