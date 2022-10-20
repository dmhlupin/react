
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Example } from './components/Example';



export const App = () => {
  const count = 3
  return (
    <div className="App">
      <Example />
    </div>
  );
}

