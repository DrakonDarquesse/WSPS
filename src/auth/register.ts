import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

async function register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user.getIdToken());
    // Send token back to client
    return user.getIdToken();
  })
  .catch((error) => {
    return error.code;
  });
}

export default register;

export { auth }