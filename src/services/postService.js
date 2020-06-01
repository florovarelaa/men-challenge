import models from '../models';

const { Post } = models;

const create = (post) => Post.create(post);

const findAll = () => Post.find({});

const findById = (id) => Post.findById(id).populate('comments');

const findByAuthor = (author) => Post.find({ author });

const findByKeyword = (keyword) => Post.find({ body: { $regex: keyword, $options: 'i' } });

const postService = {
  create,
  findAll,
  findById,
  findByAuthor,
  findByKeyword,
};

export default postService;
