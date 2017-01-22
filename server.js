const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const home = require('./routes/home');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.set('view engine', '.hbs');

app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout:'main',
}))

app.use('/', home);


io.on('connection', function (socket) {
   socket.on('chat', function (data) {
    socket.broadcast.emit('chat', data);
  });
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});