import { error, log } from "console";
import express from "express";
import fs from "fs";
// import stratFort from "./data/StratFort.json";
import stratford from "./data/Stratford.json" assert { type: "json" };
import harrow from "./data/Harrow.json" assert { type: "json" };
import heathrow from "./data/Heathrow.json" assert { type: "json" };

// const fs = require("fs").promises;

const app = express();
app.use(express.json());
app.listen(4173, () => {
  console.log("Listening on http://localhost:4173.");
});

app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});

app.get(`/:city`, (req, res) => {
  const city = req.params.city;
  console.log(typeof city);

  res.status(200).send(city);
});

const cityNameExtractor = (city) => {
  let name = "";
  switch (city.toLowerCase()) {
    case "stratford":
      name = stratford;
      break;
    case "harrow":
      name = harrow;
      break;
    case "heathrow":
      name = heathrow;
      break;
  }
  return name;
};

app.get(`/:city/:category`, (req, res) => {
  const city = req.params.city;
  const category = req.params.category;

  const name = cityNameExtractor(city);

  const sendBackdata = name.category;
  res.status(200).send(sendBackdata);
});
