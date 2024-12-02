async function load() {
  const { appLoader } = await import("kubra-ui-lib-mfe");
  const { googleAnalyticsCode } = await import("./config");
  const { mount } = await import("./bootstrap");

  const appId = "khq-app-with-react-compiler";

  appLoader({ mount, appId, googleAnalyticsCode });
}

load().catch((e) => console.error("Error while loading the MFE app", e));

export default {};
