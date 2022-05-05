import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
	productsCount: {
    type: Number,
    default: 0
  },
	createDt: {
    type: Date,
    default: Date.now
  },
	updateDt: {
    type: Date,
    default: null
  },
})

const Category = mongoose.model('category', categorySchema);
export default Category;