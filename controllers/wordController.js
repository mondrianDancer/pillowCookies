import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { wordDB });
};
export const search = (req, res) => {
  //console.log(req.query.term);
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { searchingBy, wordDB });
};
export const getUpload = (req, res) => {
  res.render("upload");
};

export const postUpload = (req, res) => {
  const {
    body: { text, title, description },
  } = req;
  res.redirect(routes.wordDetail(324393));
};
export const words = (req, res) => {
  res.render("word");
};
export const wordDetail = (req, res) => {
  res.render("wordDetail");
};
export const editWord = (req, res) => {
  res.render("editWord");
};
export const deleteWord = (req, res) => {
  res.render("deleteWord");
};
