const express = require('express');
const home = require('../routes/home');
const router = express.Router();
const io = require('socket.io');


let generatedCode = Math.floor(Math.random()*100000);

const isCodeValid = (req, res, next) => {
  if(parseInt(req.body.code) === generatedCode) {

    res.redirect('/');
  } else {
    next();
  }
};

router.route('/')
  .get((req, res) => {
    res.render('templates/home');
});

router.route('/get-code')
  .get((req, res) => {
    res.render('templates/get-code', {"code": generatedCode});
});

router.route('/lobby')
  .get((req, res) => {
  res.render('templates/lobby');
});

router.route('/lobby')
  .post(isCodeValid, (req, res) => {
  res.redirect('lobby');
});

router.route('/play')
  .get((req, res) => {
  res.render('templates/play');
});








module.exports = router;