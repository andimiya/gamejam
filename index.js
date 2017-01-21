const app = require('express')();
const http = require('http').Server(app);
const router = express.Router();
const html = require('../index');

app.use('/', html);

app.get('/',(req, res) => {
  res.render('index');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

module.exports = router;