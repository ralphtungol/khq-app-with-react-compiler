import { googleAnalyticsCodes } from "kubra-ui-lib-mfe";
import _ from "lodash";
import config from "./default";

const prod = _.cloneDeep(config);

prod.googleAnalyticsCode = googleAnalyticsCodes.configHq.prod;

export default prod;
