// const express = require('express');
// const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);




//   // var socket = io('http://localhost:3000');
//   //   socket.on('chat', function (data) {
//   //     $('#messages').append(data.message);
//   //   });
//   //     // Create socket handler to receive gamestate update from server
//   //     // update sampleMatrix
//   //     // call the setGrid Function
//   //   $('#chatForm').on('submit', (event) => {
//   //     event.preventDefault();
//   //     socket.emit('chat', { message: $('#m').val()});
//   //   });

//     // let sampleMatrix = [0,1,0,0,1,0,0,1,0];

//     // function setGrid(n,m) {
//     //   var grid = document.getElementById('grid');
//     //   grid.setAttribute('style', `width: ${n*3}px; height: ${m*3}px;`);

//     //   for (var i = 0; i < n; i++) {
//     //     for (var x = 0; x < m; x++) {
//     //       var div = document.createElement('div');
//     //       div.classList.add('cells');
//     //       div.dataset.x = x;
//     //       div.dataset.y = i;
//     //       div.style.backgroundColor = '';
//     //       div.addEventListener('click', (event) =>{
//     //         console.log(event.target.dataset);
//     //         socket.emit('clicked', event.target.dataset);
//     //       })
//     //       grid.appendChild(div);
//     //     }
//     //   }
//     // }

//     // setGrid(3,3);