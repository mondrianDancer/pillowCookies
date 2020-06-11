import { wordDB } from "../db";

export const home = (req, res) => {
  res.render("home", { wordDB });
};
export const search = (req, res) => {
  //console.log(req.query.term);
  const {
    query: { term: searchingBy, wordDB },
  } = req;
  res.render("search", { searchingBy });
};
export const words = (req, res) => {
  res.render("word");
};
export const upload = (req, res) => {
  res.render("upload");
};
export const editWord = (req, res) => {
  res.render("editWord");
};
export const deleteWord = (req, res) => {
  res.render("deleteWord");
};
