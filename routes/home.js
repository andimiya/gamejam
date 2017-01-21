const express = require('express');
const home = require('../routes/home');
const router = express.Router();


router.route('/')
  .get((req, res) => {
    res.render('templates/home');
  });

router.route('/get-code')
  .get((req, res) => {
    let code = 123;
    console.log(code);

    res.render('templates/get-code', {"code": code});
  });

router.route('/play')
  .get((req, res) => {
    res.render('templates/play');
  });



module.exports = router;