const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

let users = [
  {
    id: 0,
    name: "Matheus",
    phone: "(234)221123",
  },
  {
    id: 1,
    name: "Caio",
    phone: "(234)1213123",
  },
  {
    id: 2,
    name: "Felipe",
    phone: "(234)7471381",
  },
  {
    id: 3,
    name: "Lucas",
    phone: "(234)453199",
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('home');
})

app.get("/users", (req, res) => {
  res.render("user", { users: users });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`server is Running PORT: ${PORT}`);
});
