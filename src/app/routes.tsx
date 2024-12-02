import { Navigate, Route, Routes } from "react-router-dom";
import { DocumentTitle, shells } from "kubra-ui-lib-mfe";
import { Layout } from "components";
import { LearnMore, Welcome, Clients } from "pages";
import { routes } from "routing";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={routes.welcome} replace />} />
        <Route
          path={routes.welcome}
          element={
            <DocumentTitle shell={shells.ConfigHq} title="Welcome">
              <Welcome />
            </DocumentTitle>
          }
        />
        <Route
          path={routes.learnMore}
          element={
            <DocumentTitle shell={shells.ConfigHq} title="Learn More">
              <LearnMore />
            </DocumentTitle>
          }
        />
        <Route
          path={routes.clients}
          element={
            <DocumentTitle shell={shells.ConfigHq} title="Clients">
              <Clients />
            </DocumentTitle>
          }
        />
        <Route
          path="*"
          element={
            <DocumentTitle shell={shells.ConfigHq} title="Page Not Found">
              <div>Page Not Found</div>
            </DocumentTitle>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
