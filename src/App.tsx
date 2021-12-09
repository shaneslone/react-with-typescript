import { useState } from 'react';
import './App.css';
import List from './components/List';

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
      <List people={people} />
    </div>
  );
}

export default App;
