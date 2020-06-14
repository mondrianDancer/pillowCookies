import express from "express";
import ejsLocals from "ejs-locals";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import wordRouter from "./routers/wordRouter";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.engine("ejs", ejsLocals);

app.use("/static", express.static("static"));

//middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.words, wordRouter);

// app.get("/", function (req, res) {
//   res.render("view");
// });

export default app;
