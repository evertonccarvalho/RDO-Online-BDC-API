import * as env from "env-var";
export const JWT_KEY = env.get("JWT_KEY").required().asString();
