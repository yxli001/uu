/**
 * Parses .env parameters and ensures they are of required types. If any .env parameters are
 * missing, the server will not start and an error will be thrown.
 */

import { cleanEnv } from "envalid";
import { str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  API_ORIGIN: str(),
  FIREBASE_API_KEY: str(),
  FIREBASE_AUTH_DOMAIN: str(),
  FIREBASE_PROJECT_ID: str(),
  FIREBASE_STORAGE_BUCKET: str(),
  FIREBASE_MESSAGING_SENDER_ID: str(),
  FIREBASE_APP_ID: str(),
  FIREBASE_MEASUREMENT_ID: str(),
});
