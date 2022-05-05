import Media from "../models/media";
import { HTTP_STATUSES } from "./constants";
import responseHelper from "./responseHelper";

async function saveImagesFromUpload(list) {
  try {

    const imagesList = list.map(el => ({
      path: el.path,
      originalPath: el.originalname
    }));

    const createdFiles = await Media.insertMany(imagesList);
    return createdFiles.map(el => el._id);

  } catch (error) {
    return responseHelper(
      res,
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusCode,
      false,
      HTTP_STATUSES.INTERNAL_SERVER_ERROR.statusMessage
    )
  }
}

export default saveImagesFromUpload;