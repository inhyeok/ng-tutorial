import * as io from 'socket.io-client';

var socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('connect')
})
socket.on('disconnect', () => {
  console.log('disconnect')
})
socket.on('sendMessage', (data) => {
  console.log('socket sendMessage')
  socket.emit('addMessage', data)
})
socket.on('sendMessage', (data) => {
  console.log('socket sendMessage')
  socket.emit('addMessage', data)
})