import { ENV } from "@env";
import { ENV_DEVELOPMENT } from "../../constants/AppConstants";

export const isEnvDevelopent = ENV === ENV_DEVELOPMENT ? true : false;
