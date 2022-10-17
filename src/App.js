
import './App.css';

import { Message } from './components/Message/Message'

export const App = () => {
  const msg = 'Hello, world!'
  return (
    <div className="App">
      <Message message={msg}/>
    </div>
  );
}

