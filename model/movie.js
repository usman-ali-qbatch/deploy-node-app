import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: { type: String }
}, {
  timestamps: true,
  strict: false
});

const Movies = model('movie', schema, 'movie');

export default Movies;
