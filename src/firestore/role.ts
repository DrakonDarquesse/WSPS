import { onAuthStateChanged  } from "firebase/auth";
import { collection, getDocs , getFirestore, addDoc, doc, setDoc, deleteDoc  } from 'firebase/firestore/lite';
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
  const roleList = roleSnapshot.docs.map(doc => { 
    const data = doc.data();
    const id = doc.id; 
    return { id, ...data };
  });
  return roleList;
}

async function addRole(role: object) {
  console.log('cc');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  delete role['id'];
  return await addDoc(collection(db, 'role'), role).then(()=> {
    return 'add success';
  })
  .catch(()=> {return 'failure';}) 
}

async function editRole(role: object) {
  console.log('jj');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = role['id'];
  delete role['id'];
  console.log(role);
  return await setDoc(doc(db, 'role', id), role).then(()=> {
    return 'edit success';
  })
  .catch(()=> {return 'failure';}) 
}

async function deleteRole(role: object) {
  console.log('dd');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = role['id'];
  delete role['id'];
  console.log(role);
  return await deleteDoc(doc(db, 'role', id)).then(()=> {
    return 'del success';
  })
  .catch(()=> {return 'failure';}) 
}

export {getRole, addRole, editRole, deleteRole};