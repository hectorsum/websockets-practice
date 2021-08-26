const lblOnline = document.getElementById('lblOnline')
const lblOffline = document.getElementById('lblOffline')
const txtMessage = document.getElementById('txtMessage')
const btnSend = document.getElementById('btnSend')

const socket = io();
// on() - to listen any events
socket.on('connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
  console.log('Conectado');
})
socket.on('disconnect', () => {
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
  console.log('Desconectado del server')
})
//receives payload coming from server
socket.on('send-message', (payload) => {
  console.log('payload: ',payload)
})
btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id:'123',
    date: Date.parse(new Date().getTime())
  }
  socket.emit('send-message', payload, (data) => {
    //this callback will be used as reference in the server
    console.log('Desde el server: ',data);
  });
})