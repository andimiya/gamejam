const express = require('express');
const home = require('../routes/home');
const router = express.Router();

let generatedCode = Math.floor(Math.random()*100000);

const isCodeValid = (req, res, next) => {
  if(parseInt(req.body.code) !== generatedCode) {
    res.redirect('/')
  } else {
    next();
  }
}

router.route('/')
  .get((req, res) => {
    res.render('templates/home');
});

router.route('/get-code')
  .get((req, res) => {
    res.render('templates/get-code', {"code": generatedCode});
});

router.route('/play')
  .post(isCodeValid, (req, res) => {
    res.redirect('play');
})
 .get((req, res) => {
    res.render('templates/play');
  });






module.exports = router;