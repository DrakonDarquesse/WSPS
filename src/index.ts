import express from 'express';
import getPort from 'get-port';
import cors from 'cors';
import roleRouter from './routes/role';
import loginRouter from './routes/login';
import registerRouter from './routes/register';



(async () => {
  const app = express()
  const port = await getPort({port: 3000});

  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));

  app.use(cors({
      origin: '*' //need to change to whitelist
  }));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/', roleRouter);
  app.use('/', loginRouter);
  app.use('/', registerRouter);

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });

})();

