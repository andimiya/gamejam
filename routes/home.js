const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('templates/home');
  })

router.route('/play')
  .get((req, res) => {
    res.render('templates/play');
  })

module.exports = router;