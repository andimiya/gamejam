const express = require('express');
const home = require('../routes/home');
const router = express.Router();

let generatedCode = null;

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

router.route('/enter-code')
  .get((req, res) => {
    res.render('templates/enter-code');
  });

router.route('/')
  .post((req, res) => {
    // generatedCode === req.code;
    console.log('req.body: ', req.body);
  res.redirect('/templates/play');
});

router.route('/play')
  .get((req, res) => {
    res.render('templates/play');
  });



module.exports = router;