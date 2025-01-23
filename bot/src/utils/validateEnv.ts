/**
 * Parses .env parameters and ensures they are of required types. If any .env parameters are
 * missing, the server will not start and an error will be thrown.
 */

import { cleanEnv } from "envalid";
import { url, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    API_ORIGIN: url(),
    DISCORD_TOKEN: str(),
});
