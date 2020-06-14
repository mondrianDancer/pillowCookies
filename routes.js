const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Words

const WORDS = "/words";
const UPLOAD = "/upload";
const EDIT_WORD = "/:id/edit";
const WORD_DETAIL = "/:id";
const DELETE_WORD = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  upload: UPLOAD,
  words: WORDS,
  wordDetail: (id) => {
    if (id) {
      return `/words/${id}`;
    } else {
      return WORD_DETAIL;
    }
  },
  editWord: (id) => {
    if (id) {
      return `/words/${id}/edit`;
    } else {
      return EDIT_WORD;
    }
  },
  deleteWord: DELETE_WORD,
};

export default routes;
