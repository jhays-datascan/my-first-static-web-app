import React from 'react';

function App() {
  const value = 'World';
  let parentMessage = { message: 'default' };

  window.addEventListener('message', (event) => {
    if(event.origin === 'https://localhost:44333/Shortcut/Admin' || event.origin === 'https://dart.datascan.com/Shortcut/Admin') {
      parentMessage = event.data;
    }
  });

  return (
    <div>
      <h1>Hello {value}</h1>
      <div>Message from parent: { parentMessage.message }</div>
    </div>
  );
}

export default App;
