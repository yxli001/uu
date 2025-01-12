/**
 * Parses .env parameters and ensures they are of required types. If any .env parameters are
 * missing, the server will not start and an error will be thrown.
 */

import { cleanEnv } from "envalid";
import { port, str, url } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  PORT: port(),
  FRONTEND_ORIGIN: url(),
  POSTGRES_HOST: str(),
  POSTGRES_PORT: port(),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_DB: str(),
});
