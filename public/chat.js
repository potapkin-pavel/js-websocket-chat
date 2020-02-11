const socket = io(window.location.origin);
const message = document.getElementById('message');
const name = document.getElementById('name');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const answer = document.getElementById('answer');

btn.addEventListener('click', () => {
  socket.emit('message', {
    message : message.value,
    name : name.value
  });
  message.value = '';
})

message.addEventListener('keypress', () => {
  socket.emit('typing', name.value);
})

socket.on('message', (data) => {
  answer.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
})

socket.on('typing', (data) => {
  answer.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'
})