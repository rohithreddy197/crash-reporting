import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [count, setCounter] = React.useState(0);
  const handleButtonClick = () => {
    setCounter(prevCount => prevCount + 1);
  }
  if (count > 5) {
    throw new Error('App crashed');
  }
  else {
    return (
      <header className="App-header">
        BUGSNAG
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click on the button more than five times to end the world
        </p>
        <div className="App">
          <button
            onClick={handleButtonClick}
          >
            End of world
          </button>
        </div>
      </header>
    );
  }
}

export default App;
