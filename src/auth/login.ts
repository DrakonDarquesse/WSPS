import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.getIdToken());
    // Send token back to client
    return user.getIdToken();
  })
  .catch((error) => {
    return error.code;
  });
}

export default signIn;

export { auth }