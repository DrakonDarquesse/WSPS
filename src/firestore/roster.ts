import { onAuthStateChanged  } from "firebase/auth";
import { collection, getDocs , getFirestore, addDoc, doc, setDoc, deleteDoc  } from 'firebase/firestore/lite';
import { app } from '../config';
import { auth } from '../auth/login';

async function getRoster() {
  console.log('ee');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const rosterCol = collection(db, 'roster');
  const rosterSnapshot = await getDocs(rosterCol);
  const rosterList = await rosterSnapshot.docs.map(doc => { 
    const data = doc.data();
    const id = doc.id;
    return { id, ...data };
  });

  return rosterList;
}

async function addRoster(roster: object) {
  console.log('cc');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  delete roster['id'];
  return await addDoc(collection(db, 'roster'), roster).then(()=> {
    return 'add success';
  })
  .catch(()=> {return 'failure';}) 
}

async function editRoster(roster: object) {
  console.log('jj');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = roster['id'];
  delete roster['id'];
  console.log(roster, 111);
  return await setDoc(doc(db, 'roster', id), roster).then(()=> {
    console.log(111);
    return 'edit success';
  })
  .catch(()=> {return 'failure';}) 
}

async function deleteRoster(roster: object) {
  console.log('dd');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = roster['id'];
  delete roster['id'];
  console.log(roster);
  return await deleteDoc(doc(db, 'roster', id)).then(()=> {
    return 'del success';
  })
  .catch(()=> {return 'failure';}) 
}

export { getRoster, addRoster, editRoster, deleteRoster };