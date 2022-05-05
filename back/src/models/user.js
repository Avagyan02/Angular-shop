import mongoose from 'mongoose';
import { UserRole } from '../helpers/constants';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: {
    productsOnSale: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }],
    purchasedProducts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }],
    soldproducts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
      default: null
    }]
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verifiedCode: {
    type: String,
    default: null
  },
  restore: {
    typeo: Boolean,
    default: false,
  },
  restoreCode: {
    type: String,
    default: null
  },
  registerDt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    default: UserRole.user
  },
});

const User = mongoose.model('users', userSchema);
export default User;