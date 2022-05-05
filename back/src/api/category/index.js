import express from "express";
import addCategory from "./services/post";
import updateCategory from "./services/put";
import searchProduct from "./validation/searchCategory";
import validateCategory from "./validation/validateCategory";

const router = express.Router();

router
  .post('/post', validateCategory, addCategory);

router
  .put('/update', validateCategory, searchProduct, updateCategory);

export default router;  