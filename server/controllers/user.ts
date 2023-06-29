import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

export default userRouter;
