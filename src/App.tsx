import React, { useState } from 'react';
import './App.css';

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div className='App'>
      <h1>People Invited To my Party</h1>
    </div>
  );
}

export default App;
