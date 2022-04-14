import { onAuthStateChanged  } from "firebase/auth";
import { collection, getDocs , getFirestore, addDoc, doc, setDoc, deleteDoc  } from 'firebase/firestore/lite';
import { app } from '../config';
import { auth } from '../auth/login';

async function getRoleDeck() {
  console.log('ee');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const roleDeck = collection(db, 'roleDeck');
  const roleDeckSnapshot = await getDocs(roleDeck);
  const roleDecks = await roleDeckSnapshot.docs.map(doc => { 
    const data = doc.data();
    const id = doc.id;
    return { id, ...data };
  });

  return roleDecks;
}

async function addRoleDeck(roleDeck: object) {
  console.log('cc');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  delete roleDeck['id'];
  return await addDoc(collection(db, 'roleDeck'), roleDeck).then(()=> {
    return 'add success';
  })
  .catch(()=> {return 'failure';}) 
}

async function editRoleDeck(roleDeck: object) {
  console.log('jj');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = roleDeck['id'];
  delete roleDeck['id'];
  console.log(roleDeck, 111);
  return await setDoc(doc(db, 'roleDeck', id), roleDeck).then(()=> {
    console.log(111);
    return 'edit success';
  })
  .catch(()=> {return 'failure';}) 
}

async function deleteRoleDeck(roleDeck: object) {
  console.log('dd');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = roleDeck['id'];
  delete roleDeck['id'];
  console.log(roleDeck);
  return await deleteDoc(doc(db, 'roleDeck', id)).then(()=> {
    return 'del success';
  })
  .catch(()=> {return 'failure';}) 
}

export { getRoleDeck, addRoleDeck, editRoleDeck, deleteRoleDeck };