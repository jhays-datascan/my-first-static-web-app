import React from 'react';

function App() {
  const value = 'World';
  let parentMessage = { message: 'default' };
  let origin = "";
  let data = "";
  let hadListener = false;
  let neededToAttach = false;

  const processEvent = (event) => {
    console.log("processing event");

    data = JSON.stringify(event.data);
    origin = event.origin;

    if(event.origin === 'https://localhost:44333' || event.origin === 'https://dart.datascan.com') {
      parentMessage = event.data.message;
    }
  }

  if(window.addEventListener) {
    hadListener = true;
    console.log("had listener");
    window.addEventListener('message', processEvent, false);
  }
  else {
    neededToAttach = true;
    console.log("needed to attach");
    window.attachEvent("onmessage", processEvent);
  }


  return (
    <div>
      <h1>Hello {value}</h1>
      <div>Message from parent: { parentMessage.message }</div>
      <div>origin: {origin}</div>
      <div>event data: {data}</div>
      <div>had listener: {hadListener.toString()}</div>
      <div>needed to attach: {neededToAttach.toString()}</div>
    </div>
  );
}

export default App;
