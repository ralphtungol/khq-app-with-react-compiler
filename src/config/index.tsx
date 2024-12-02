import defaultConfig from "./default";
import localConfig from "./local";
import devConfig from "./dev";
import testConfig from "./test";
import productionConfig from "./production";
import qaConfig from "./qa";

export const envs = {
  LOCAL: "local",
  DEV: "development",
  QA: "qa",
  TEST: "test",
  PRODUCTION: "prod",
};

// eslint-disable-next-line
let selectedConfig = null;

switch (process.env.REACT_APP_ENV) {
  case envs.LOCAL:
    selectedConfig = localConfig;
    break;
  case envs.DEV:
    selectedConfig = devConfig;
    break;
  case envs.TEST:
    selectedConfig = testConfig;
    break;
  case envs.QA:
    selectedConfig = qaConfig;
    break;
  case envs.PRODUCTION:
    selectedConfig = productionConfig;
    break;
  default:
    selectedConfig = defaultConfig;
}

export const { api, googleAnalyticsCode } = selectedConfig;

export default selectedConfig;
