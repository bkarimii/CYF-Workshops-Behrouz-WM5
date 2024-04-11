import express from "express";

const app = express();

app.listen(3002, () => {
  console.log("listening on 3002");
});

app.get("/", (req, res) => {
  res.status(200).send("hi there");
});
