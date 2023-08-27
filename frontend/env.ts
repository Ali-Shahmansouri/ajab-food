import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  EXPO_PUBLIC_API_URL: str(),
});

export default env;
