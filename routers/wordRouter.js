import express from "express";
import routes from "../routes";
import {
  words,
  getUpload,
  postUpload,
  wordDetail,
  getEditWord,
  postEditWord,
  deleteWord,
} from "../controllers/wordController";

const wordRouter = express.Router();

wordRouter.get(routes.words, words);

wordRouter.get(routes.upload, getUpload);
wordRouter.post(routes.upload, postUpload);

wordRouter.get(routes.wordDetail(), wordDetail);

wordRouter.get(routes.editWord(), getEditWord);
wordRouter.post(routes.editWord(), postEditWord);

wordRouter.get(routes.deleteWord, deleteWord);

export default wordRouter;
