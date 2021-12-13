import { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'data:image/jpeg;base64,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',
      age: 36,
      note: 'The GOAT!',
    },
  ]);

  return (
    <div className='App'>
      <h1>People Invited To my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
