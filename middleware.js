import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Pillow Cookies";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};
