import express from 'express';
import userRouter from './controllers/user';

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log('server is running on port', PORT); // server.address().port);
});



export default app;
