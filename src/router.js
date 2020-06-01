import express from 'express';

import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';
import commentRouter from './routes/commentRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);

export default router;
