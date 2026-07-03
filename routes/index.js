var express = require('express');
var router = express.Router();

const usermodel = require("./users");
/* GET home page. */
router.get('/', function (req, res) {
  res.send("hello world");
})

router.get('/create', async function (req, res) {
  const createduser = await usermodel.create(
    {
      username: "Shredhaya",
      name: "Shredhaya",
      age: 20
    }
  );
  res.send(createduser);
})
module.exports = router;
