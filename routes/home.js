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

router.route('/play')
  .post((req, res) => {
  if (parseInt(generatedCode) === parseInt(req.code)) {

    res.redirect('/play');
  }
  else {
    console.log('error, codes dont match');
    console.log('generated code', typeof generatedCode);
    console.log('req code', typeof req.code);
  }

});

router.route('/play')
  .get((req, res) => {
    res.render('templates/play');
  });



module.exports = router;