import express from 'express';
import signIn from '../auth/login';

const router = express.Router();


router.post('/login', async function (req, res) {
  const userCredentials = req.body;
  const result = await signIn(userCredentials.email, userCredentials.password);
  res.send(result);
})

export default router;