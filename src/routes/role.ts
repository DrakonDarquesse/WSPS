import express from 'express';
import { getRole, addRole, editRole, deleteRole } from '../firestore/role';

const router = express.Router();

router.get('/role', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await getRole().then((role)=> {
    console.log(role);
    res.send(role);
  })

})

router.post('/addRole', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await addRole(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })

})

router.post('/editRole', async function (req, res) {
  await editRole(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

router.post('/deleteRole', async function (req, res) {
  await deleteRole(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

export default router;