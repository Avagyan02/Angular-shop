import mongoose from 'mongoose';
import responseHelper from './helpers/responseHelpers';
import { HTTP_STATUSES } from './helpers/constants';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/store', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    responseHelper(
      res,
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
  }   
}

export default connect;