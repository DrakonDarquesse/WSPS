import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

async function register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    // Send token back to client
    return user;
  })
  .catch((error) => {
    return error == null ? error.code: undefined;
  });
}

export default register;

export { auth }