import commentService from '../../services/commentService';

const createComment = async (req, res, next) => {
  try {
    const comment = await commentService.create(req.body);
    return res.status(200).send(comment);
  } catch (err) {
    return next(err);
  }
};

export default createComment;
