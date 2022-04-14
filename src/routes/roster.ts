import express from 'express';
import { getRoster, addRoster, editRoster, deleteRoster } from '../firestore/roster';
const router = express.Router();

router.get('/rosters', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await getRoster().then(async (rosterList)=> {
    console.log(rosterList);
    res.send(rosterList);
  })

})

router.post('/addRoster', async function (req, res) {
    // const obj = {name:"John", task:"a", color:0xFF607D8B, isEnabled:true};
  await addRoster(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })

})

router.post('/editRoster', async function (req, res) {
  await editRoster(req.body).then((data)=> {
    console.log(data);
    res.send(data);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

router.post('/deleteRoster', async function (req, res) {
  await deleteRoster(req.body).then((msg)=> {
    console.log(msg);
    res.send(msg);
  })
  .catch(()=> {return 'Something is wrong and I have no idea what';}) 
})

export default router;