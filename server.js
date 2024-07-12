const express = require("express");
const sequelize = require("./config/connection.js");
const routes = require('./controllers')

const { User, Comment, Post } = require("./models");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`API SERVER IS LISTENING ON ${PORT}`);
  });
});
