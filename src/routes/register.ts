import express from 'express';
import register from '../auth/register';

const router = express.Router();


router.post('/register', async function (req, res) {
  console.log(req.body.email);
  const userCredentials = req.body;
  const token = await register(userCredentials.email, userCredentials.password);
  res.send(token);
})

export default router;