import express from 'express';
import { getMember, editMember, deleteMember, getOneMember } from '../firestore/member';

const router = express.Router();

router.get('/members', async function (req, res) {
  console.log("getting member");
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await getMember().then((members)=> {
    console.log(members);
    res.send(members);
  })

})

router.get('/member/:id', async function (req, res) {
   console.log('aa')
  await getOneMember(req.params).then((member)=> {
    console.log(member);
    res.send(member);
  })

})

router.post('/editMember', function (req, res) {
  editMember(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

router.post('/deleteMember', async function (req, res) {
  await deleteMember(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

export default router;