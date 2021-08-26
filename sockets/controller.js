const socketController = (socket) => {
  console.log('Client Connected',socket.id);
  socket.on('disconnect', () => {
    console.log('Client Disconnected',socket.id)
  })
  socket.on('send-message', (payload, callback) => {
    
    //gives back info to user whos sent the payload
    const id = 123456;
    callback({id, fecha: new Date().getTime()});
    
    //gives back info from server to all clients
    socket.broadcast.emit('send-message', payload)
  })
}

module.exports = socketController;