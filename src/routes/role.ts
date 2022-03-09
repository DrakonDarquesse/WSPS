import express from 'express';
import roleList from '../firestore/role';

const router = express.Router();

router.get('/role', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await roleList().then((role)=> {
    console.log(role[0]);
    res.send(role[0]);
  })

})


export default router;