import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Form as FormClass } from './class-components/Form';

export const App = () => {
  return (
    <div className="App">
      {/* <Form /> */}
      <FormClass />
    </div>
  );
}

