import React from 'react';

function App() {
  const value = 'World';
  let parentMessage = { message: 'default' };
  let origin = "";
  var data = "";

  window.addEventListener('message', (event) => {
    data = event.data;
    origin = event.origin;

    if(event.origin === 'https://localhost:44333' || event.origin === 'https://dart.datascan.com') {
      parentMessage = event.data;
    }
  });

  return (
    <div>
      <h1>Hello {value}</h1>
      <div>Message from parent: { parentMessage.message }</div>
      <div>origin: {origin}</div>
      <div>event data: {data}</div>
    </div>
  );
}

export default App;
