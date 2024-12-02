import { googleAnalyticsCodes } from "kubra-ui-lib-mfe";
import _ from "lodash";
import config from "./default";

const test = _.cloneDeep(config);

test.googleAnalyticsCode = googleAnalyticsCodes.configHq.qa;

export default test;
