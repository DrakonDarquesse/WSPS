import express from 'express';
import { getRole, addRole, editRole, deleteRole } from '../firestore/role';

const router = express.Router();

router.get('/roles', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await getRole().then(async (roles)=> {
    const r = await Promise.all(roles);
    res.send(r);
  })

})

router.post('/addRole', (req, res) => {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  addRole(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })

})

router.post('/editRole', async function (req, res) {
  await editRole(req.body).then((data)=> {
    console.log(data);
    res.send(data);
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