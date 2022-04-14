import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.getIdToken());
    // Send token back to client
    return user.uid;
  })
  .catch((error) => {
     console.dir(error, {depth: null})
    return error == null ? error.code: undefined;
  });
}

export default signIn;

export { auth }