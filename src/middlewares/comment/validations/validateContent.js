import expressValidator from 'express-validator';
import { MAX_CONTENT_LENGTH } from '../../../models/comment';
import locales from '../../../locales/en.json';

const { CONTENT_INVALID_LENGTH } = locales.comment.validations;

const { check } = expressValidator;

const validateContent = check('content')
  .isString()
  .isLength({ min: 0, max: MAX_CONTENT_LENGTH })
  .withMessage(`${CONTENT_INVALID_LENGTH} ${MAX_CONTENT_LENGTH}`);

export default validateContent;
