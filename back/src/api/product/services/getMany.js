import { HTTP_STATUSES } from "../../../helpers/constants";
import responseHelper from "../../../helpers/responseHelper";
import Product from "../../../models/product";

async function getMany(req, res) {
	try { 
    console.log(9);
		// const prodLimit = +req.query.limit;
		const { category } = req;
    let productList;
    console.log(category);

		if (category.name === 'any') {
      console.log(1);
			productList = await Product.find()
    }
    // } else {
    //   console.log(2);
    //   productList = await Product.findMany({ categoryId: new ObjectID(category) }).limit(prodLimit);
    //   console.log(3);
    // }
    console.log(productList);

    console.log(4);

    return responseHelper(
      res,
      HTTP_STATUSES.SUCCESS.statusCode,
      true,
      HTTP_STATUSES.SUCCESS.statusMessage,
      productList
    )


	} catch (error) {
		responseHelper(
      res, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode, 
      false, 
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    );
	}
}

export default getMany;