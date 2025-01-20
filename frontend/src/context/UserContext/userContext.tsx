import { User } from "firebase/auth";
import { createContext } from "react";

type IUserContext = {
  firebaseUser: User | null;
};

/**
 * A context that provides the current Firebase user data, null if not logged in
 */
export const UserContext = createContext<IUserContext>({
  firebaseUser: null,
});
