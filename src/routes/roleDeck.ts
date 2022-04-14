import express from 'express';
import { getRoleDeck, addRoleDeck, editRoleDeck, deleteRoleDeck  } from '../firestore/roleDeck';
const router = express.Router();

router.get('/roleDecks', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await getRoleDeck().then(async (roleDecks)=> {
    console.log(roleDecks);
    res.send(roleDecks);
  })

})

router.post('/addRoleDeck', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  console.log('aaaaaa');
  await addRoleDeck(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })

})

router.post('/editRoleDeck', async function (req, res) {
  await editRoleDeck(req.body).then((data)=> {
    console.log(data);
    res.send(data);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

router.post('/deleteRoleDeck', async function (req, res) {
  await deleteRoleDeck(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

export default router;