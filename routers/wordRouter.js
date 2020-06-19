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
import { uploadWord, onlyPrivate } from "../middleware";

const wordRouter = express.Router();

wordRouter.get(routes.words, words);

wordRouter.get(routes.upload, onlyPrivate, getUpload);
wordRouter.post(routes.upload, onlyPrivate, postUpload);

wordRouter.get(routes.wordDetail(), wordDetail);

wordRouter.get(routes.editWord(), onlyPrivate, getEditWord);
wordRouter.post(routes.editWord(), onlyPrivate, postEditWord);

wordRouter.get(routes.deleteWord(), onlyPrivate, deleteWord);

export default wordRouter;
