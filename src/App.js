import React from 'react';
import Timer from './components/Timer';

function App() {
  return (
    <div className="app">
      <h1>Годинники для різних міст</h1>
      <Timer city="Український" offset={3} />
      <Timer city="США Вашингтон" offset={-4} />
      <Timer city="Гонконг" offset={8} />
    </div>
  );
}

export default App;
