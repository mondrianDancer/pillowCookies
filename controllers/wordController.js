import routes from "../routes";
import Word from "../models/Word";

export const home = async (req, res) => {
  try {
    const words = await Word.find({});
    res.render("home", { words });
  } catch (error) {
    console.log(error);
    res.render("home", { words: [] });
  }
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

export const postUpload = async (req, res) => {
  const {
    body: { text, title, description },
  } = req;
  const newWord = await Word.create({ text, title, description });
  res.redirect(routes.wordDetail(newWord.id));
};

export const words = (req, res) => {
  res.render("word");
};

export const wordDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const word = await Word.findById(id);
    res.render("wordDetail", { word });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditWord = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const word = await Word.findById(id);
    res.render("editWord", { word });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditWord = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Word.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.wordDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteWord = (req, res) => {
  res.render("deleteWord");
};
