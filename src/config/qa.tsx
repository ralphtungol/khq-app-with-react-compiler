import { googleAnalyticsCodes } from "kubra-ui-lib-mfe";
import _ from "lodash";
import config from "./default";

const qa = _.cloneDeep(config);

qa.googleAnalyticsCode = googleAnalyticsCodes.configHq.qa;

export default qa;
