const router = require("express").Router();

const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const UserData = await User.findAll();
    res.status(200).json(UserData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
