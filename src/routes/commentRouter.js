import express from 'express';
import commentMiddlewares from '../middlewares/comment';
import commonValidations from '../middlewares/common/validations';
import commentValidations from '../middlewares/comment/validations';
import { isAuthorized } from '../middlewares/common/isAuthorized';

const { validateContent, validateAuthorExists } = commentValidations;

const { validateBody } = commonValidations;
const { createComment, findAllComments } = commentMiddlewares;

const commentRouter = express.Router();

const createPostValidations = [validateContent, validateAuthorExists];

const createCommentMiddleware = validateBody(createPostValidations);
commentRouter.post('/', isAuthorized, createCommentMiddleware, createComment);

commentRouter.get('/', isAuthorized, findAllComments);

export default commentRouter;
