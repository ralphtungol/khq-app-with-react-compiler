import { createRoot, Root } from "react-dom/client";
import { MountProps } from "kubra-ui-lib-mfe";
import { ForgeThemeProvider } from "kubra-ux-forge";
import { AppWithAuth } from "app-with-auth";

let root: Root;

const mount = ({ mountPoint, routeProps, analytics }: MountProps) => {
  root = createRoot(mountPoint);

  root.render(
    <ForgeThemeProvider>
      <AppWithAuth analytics={analytics} basePath={routeProps.basePath} />
    </ForgeThemeProvider>
  );
};

const unmount = () => {
  root.unmount();
};

export { mount, unmount };
