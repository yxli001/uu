import { ReactNode, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "src/lib/firebase";
import { UserContext } from "./userContext";

/**
 * A provider component that handles the logic for supplying the context
 * with its current user
 */
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  onAuthStateChanged(auth, (user: User | null) => {
    setFirebaseUser(user);
    setInitialLoading(false);
  });

  if (initialLoading) {
    return;
  }

  return (
    <UserContext.Provider value={{ firebaseUser }}>
      {children}
    </UserContext.Provider>
  );
};
