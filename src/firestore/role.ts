import { onAuthStateChanged  } from "firebase/auth";
import { collection, getDocs , getFirestore } from 'firebase/firestore/lite';
import { app } from '../config';
import { auth } from '../auth/login';

  // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};

async function getRole() {
  console.log('bb');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const roleCol = collection(db, 'role');
  const roleSnapshot = await getDocs(roleCol);
  const roleList = roleSnapshot.docs.map(doc => doc.data());
  console.log(roleList)
  return roleList;
}

export default getRole;