import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  originalPath: {
    type: String,
    required: true,
  },
  createDt: {
    type: Date,
    default: Date.now
  }
})

const Media = mongoose.model('media', mediaSchema);
export default Media;