import React from 'react';
import Total from './Components/Total/Total.js';
import History from './Components/History/History.js';
import Operation from './Components/Operation/Operation.js';

function App() {
  return (
    <>
      <header>
        <h1>Кошелёк</h1>
        <h2>Калькулятор расходов</h2>
      </header>
      
      <main>
        <div className="container">
        <Total />
        <History />
        <Operation/>   
        </div>
      </main>
    </>
  );
}

export default App;
