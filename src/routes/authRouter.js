import express from 'express';
import userMiddlewares from '../middlewares/user';
import commonValidations from '../middlewares/common/validations';
import userValidations from '../middlewares/user/validations';

const {
  validateEmail,
  validatePassword,
  validateUniqueEmail,
} = userValidations;
const { validateBody } = commonValidations;
const { authUser, registerUser } = userMiddlewares;

const authRouter = express.Router();

const authValidations = [validateEmail, validatePassword];

const authMiddlewares = validateBody(authValidations);

/**
 * @swagger
 * /auth:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     body:
 *       - email: email
 *         description: User's email to use for auth.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: auth
 */
authRouter.post('/', authMiddlewares, authUser);

const registerValidations = authValidations.concat(validateUniqueEmail);
const registerMiddlewares = validateBody(registerValidations);
authRouter.post('/register', registerMiddlewares, registerUser);

export default authRouter;
