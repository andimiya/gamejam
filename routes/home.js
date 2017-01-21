const express = require('express');
const home = require('../routes/home');
const router = express.Router();
const methodOverride = require('method-override');

let generatedCode = null;

router.use(methodOverride('_method'));

router.route('/')
  .get((req, res) => {
    res.render('templates/home');
});

router.route('/get-code')
  .get((req, res) => {
    generatedCode = 123;
    console.log(generatedCode);
    res.render('templates/get-code', {"code": generatedCode});
});

router.route('/')
  .post((req, res) => {
  // if (generatedCode === req.code;
  console.log('req body', req.body);
  // console.log(generatedCode);
  res.redirect('/templates/play');
});

router.route('/play')
  .get((req, res) => {
    res.render('templates/play');
  });



module.exports = router;