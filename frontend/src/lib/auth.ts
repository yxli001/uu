import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  AuthError,
  AuthErrorCodes,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "src/lib/firebase";

const googleProvider = new GoogleAuthProvider();
auth.useDeviceLanguage();

export const signupWithEmail = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handleFirebaseAuthError(error as AuthError);
  }
};

export const signinWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handleFirebaseAuthError(error as AuthError);
  }
};

export const signinWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    handleFirebaseAuthError(error as AuthError);
  }
};

export const logout = async () => {
  await auth.signOut();
};

/**
 * Handles Firebase Auth errors and (maybe) dispatches messages to the UI
 */
const handleFirebaseAuthError = (error: AuthError) => {
  switch (error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      console.log("Email already in use");
      break;
    case AuthErrorCodes.INVALID_EMAIL:
      console.log("Invalid email");
      break;
    case AuthErrorCodes.WEAK_PASSWORD:
      console.log("Weak password");
      break;
    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
      console.log("Invalid credential");
      break;
    default:
      console.log("Unknown error");
      console.log(error);
  }
};
