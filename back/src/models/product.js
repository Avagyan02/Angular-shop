import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category' 
  },
	addingDt: {
    type: Date,
    default: Date.now
  },
	updateDt: {
    type: Date,
    default: null
  },
	imageId: [{
		type: mongoose.Schema.Types.ObjectId,
    ref: 'media'
	}],
	nowPrice: {
    type: Number,
    required: true
  },
	oldPrice: {
    type: Number,
    default: null
  },
	description: {
    type: String,
    required: true
  },
	productSKU: {
    type: Number,
    required: true
  },
	quant: {
    type: Number,
    required: true
  },
})

const Product = mongoose.model('product', productSchema);
export default Product;