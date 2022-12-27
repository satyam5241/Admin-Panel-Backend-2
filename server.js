import express from "express";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use("/api", routes);
app.use("/", (req, res) => {
  res.send(
    `You have requested to connect the wrong API, Please check your API Url and try again.`
  );
});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
