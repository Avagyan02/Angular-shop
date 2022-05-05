import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, res, cb) {
    cb(null, 'media');
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
})

const types = ['image/jpg', 'image/jpeg'];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

export default multer({storage, fileFilter});