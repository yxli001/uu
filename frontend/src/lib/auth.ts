import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  AuthError,
  AuthErrorCodes,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "src/lib/firebase";

const googleProvider = new GoogleAuthProvider();

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
    await signInWithPopup(auth, googleProvider);
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
    case AuthErrorCodes.POPUP_CLOSED_BY_USER:
      console.log("Popup closed by user");
      break;
    case AuthErrorCodes.POPUP_BLOCKED:
      console.log("Popup blocked");
      break;
    default:
      console.log("Unknown error");
      console.log(error);
  }
};
