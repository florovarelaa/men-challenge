import commentService from '../../services/commentService';

const findAllComments = async (req, res, next) => {
  try {
    const posts = await commentService.findAll();
    return res.status(200).send(posts);
  } catch (err) {
    return next(err);
  }
};

export default findAllComments;
