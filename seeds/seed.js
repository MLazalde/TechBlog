const sequelize = require("../config/connection");

const { User, Post, Comment } = require("../models");

const userData = require("./userSeed.json");
const postData = require("./postSeed.json");
const { serialize } = require("v8");

const seeder = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData);
  // we have to create our bulk post data with also a userId
  for (const post of postData) {
    await Post.create({
      ...post,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seeder();
