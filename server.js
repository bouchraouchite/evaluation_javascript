const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Bienvenue sur l application des pays!");
});

app.get("/app", (req, res) => {
  res.render("/public/app.js");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/countries", (req, res) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Il y a eu une erreur!", error);
      res
        .status(500)
        .send("Erreur lors de la récupération des données des pays");
    });
});
