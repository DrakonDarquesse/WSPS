import { onAuthStateChanged, User  } from "firebase/auth";
import { collection, getDocs , getFirestore, doc, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { app } from '../config';
import { auth } from '../auth/login';

  // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};

async function getMember() {
  console.log('bb');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const memberCol = collection(db, 'member');
  const memberSnapshot = await getDocs(memberCol);
  const memberList = memberSnapshot.docs.map(doc => { 
    const data = doc.data();
    const id = doc.id; 
    return { id, ...data };
  });
  return memberList;
}

async function getOneMember(memberId: object) {
  console.log('bb');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const memberDoc = doc(db, 'member', memberId['id']);
  const memberSnapshot = await getDoc(memberDoc);
  const id = memberSnapshot.id;
  return {
    id,
    ...memberSnapshot.data()
  }
}

async function addMember(member: User, name:string) {
  console.log('mm');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const data = {
    name: name,
    email: member.email,
    isEnabled: true,
    roles: [],
    blockedDates: [],
    role: 'member',
  }

  return await setDoc(doc(db, 'member', member.uid), data).then(()=> {
    return 'add success';
  })
  .catch(()=> {return 'failure';}) 
}

async function editMember(member: object) {
  console.log('xx');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = member['id'];
  delete member['id'];
  console.log(member);
  return await updateDoc(doc(db, 'member', id), member).then(()=> {
    return 'edit success';
  })
  .catch(()=> {return 'failure';}) 
}

async function deleteMember(member: object) {
  console.log('dd');
  onAuthStateChanged(auth, (user)=> {
    console.log(user.uid);

  })
  const db = getFirestore(app);
  const id = member['id'];
  delete member['id'];
  console.log(member);
  return await deleteDoc(doc(db, 'member', id)).then(()=> {
    return 'del success';
  })
  .catch(()=> {return 'failure';}) 
}

export {getMember, addMember, editMember, deleteMember, getOneMember};