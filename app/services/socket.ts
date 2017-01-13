import * as io from 'socket.io-client';

var socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('connect')
})

socket.on('disconnect', () => {
  console.log('disconnect')
})

socket.on('sendMessage', (data:string) => {
  console.log('socket sendMessage')
  socket.emit('addMessage', data)
})

export class SocketService {
  on(event, callback) {
    socket.on(event, () => {
      if (callback) {
        callback(socket)
      }
    })
  }

  emit(event, data, callback) {
    socket.emit(event, data, () => {
      if (callback) {
        callback(socket, data)
      }
    })
  }
}