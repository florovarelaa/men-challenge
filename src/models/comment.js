import mongoose from 'mongoose';

const { Schema } = mongoose;
export const MAX_CONTENT_LENGTH = 200;

export const TITLE_FIELD_NAME = 'title';
export const AUTHOR_FIELD_NAME = 'author';
export const BODY_FIELD_NAME = 'body';

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    required: true,
    maxlength: MAX_CONTENT_LENGTH,
  },
  date: { type: Date, default: Date.now },
});

CommentSchema.methods.toJSON = function () {
  const user = this.toObject({ versionKey: false });
  return user;
};

export default mongoose.model('Comment', CommentSchema);
