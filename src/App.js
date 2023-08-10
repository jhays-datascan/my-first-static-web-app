import React from 'react';

function App() {
  const value = 'World';
  const [parentMessage, setParentMessage] = React.useState({ message: 'default' });
  const [origin, setOrigin] = React.useState();

  const processEvent = (event) => {
    if(event.origin === 'https://localhost:44333') {
      setParentMessage({...event.data});
      setOrigin(event.origin);
    }
  }

  if(window.addEventListener) {
    window.addEventListener('message', processEvent);
  }
  else {
    window.attachEvent("onmessage", processEvent);
  }

  const openAlert = () => {
    alert('alerting...');
  };

  return (
    <div>
      <h1>Hello {value}</h1>
      <div>Message from parent: { parentMessage.message }</div>
      <div>origin: {origin}</div>
      <button onClick={openAlert}>Whats up</button>
    </div>
  );
}

export default App;
