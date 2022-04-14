import express from 'express';
import register from '../auth/register';
import { addMember } from '../firestore/member';

const router = express.Router();


router.post('/register', async function (req, res) {
  const userData = req.body;
  console.log(userData);
  const user = await register(userData.email, userData.password);
  console.log(user);
  const result  = await addMember(user, userData.name);
  res.send(result);
})

export default router;