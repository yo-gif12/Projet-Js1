const app = document.querySelector('.app');

function makeMessage(message) {
  const newMessage = document.createElement('p');
  const addText = document.createTextNode(message);
  newMessage.appendChild (addText);
  app.appendChild(newMessage);
}
makeMessage("HELLO WRLD");
