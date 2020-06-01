import express from 'express';
import postMiddlewares from '../middlewares/post';
import commonValidations from '../middlewares/common/validations';
import postValidations from '../middlewares/post/validations';
import { isAuthorized } from '../middlewares/common/isAuthorized';

const {
  validateTitle,
  validateBody: validatePostBody,
  validateAuthorExists,
  validateId,
} = postValidations;

const { validateBody } = commonValidations;
const {
  createPost,
  findAllPosts,
  findPostById,
  findPostByAuthor,
  findPostByKeyword,
} = postMiddlewares;

const postRouter = express.Router();

const createPostValidations = [
  validateTitle,
  validatePostBody,
  validateAuthorExists,
];

const createPostMiddleware = validateBody(createPostValidations);
postRouter.post('/', isAuthorized, createPostMiddleware, createPost);

postRouter.get('/', isAuthorized, findAllPosts);

postRouter.get('/:id', isAuthorized, validateId, findPostById);

postRouter.get('/author/:author', isAuthorized, validateId, findPostByAuthor);

postRouter.get(
  '/keyword/:keyword',
  isAuthorized,
  validateId,
  findPostByKeyword,
);

export default postRouter;
