var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/subscribe", function(req, res, next) {
  const { username, password } = req.body;

  // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

  res.render("subscribed", {
    title: "You are subscribed",
    username,
    password
  });
});


module.exports = router;
