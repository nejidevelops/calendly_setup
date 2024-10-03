import React from 'react';
import PopupCalendly from './PopupCalendly';
import Calendly from './Calendly';
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Calendly Integration</h1>
      <div className="widgets-container">
        {/* Calendly Popup Widget */}
        <PopupCalendly />
        
        {/* Inline Calendly Widget */}
        <Calendly />
      </div>
    </div>
  );
}

export default App;
