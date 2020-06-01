import models from '../models';

const { Comment } = models;

const create = (comment) => Comment.create(comment);

const findAll = () => Comment.find({});

const commentService = { create, findAll };

export default commentService;
