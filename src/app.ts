import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";

const app = express();
const port = 30010;
const routes = new Routes(app);

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

routes.setRoutes()

app.listen(port, async () => {
  console.log(`server start with port ${port}`);
});
