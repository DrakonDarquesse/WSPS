import express from 'express';
import signIn from '../auth/login';

const router = express.Router();


router.post('/login', async function (req, res) {
  console.log(req.body.email);
  const userCredentials = req.body;
  const token = await signIn(userCredentials.email, userCredentials.password);
  res.send('token');
})

export default router;