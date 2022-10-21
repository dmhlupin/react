
import { useEffect, useState } from 'react';
import './App.css';

import { Messages} from './components/Messages.jsx';
import { RobotMessage } from './components/RobotMessage';
import { Id } from './components/GetId';


export const App = () => {
    
  const [messageList, setMessageList] = useState([]);
  const [formState, setFormState] = useState({author: '', message: ''});
  const [robotMessage, setRobotMessage] = useState('');
  let update = false;

  const sendMessage = (event) => {
    event.preventDefault();
    const author = event.target.author.value;
    const message = event.target.message.value;
    
    setFormState({ 
        author: author,
        message: message
    });    
  }

  

  useEffect(() => {
        setRobotMessage('Сообщение проверяется...');
        setTimeout(() => {
          setRobotMessage('Сообщение проверено!');
          setMessageList([...messageList, {key: Id(), author: formState.author, message: formState.message}]);
        }, 5000);
    }, [formState.author]);


  return (
    <div className="App">

        <form onSubmit={sendMessage}>
            <p>
              <label>Name: </label>
              <input type="text" name="author" placeholder='Author'></input>
            </p>
            <p>
              <label>Message: </label>
              <input type="text" name="message" placeholder="Message"></input>
            </p>
            <input type="submit" className='button' />
        </form>
        <RobotMessage message={robotMessage}/>
        <Messages messageList={messageList} />
    </div>

  );
}



// const [cardDetails, setCardDetails] = useState({
//   title: “Something”,
//   body: “uniquely done”,
// });

// useEffect(() => {
//   setTimeout(() => {
//     setCardDetails({
//       title: “We”,
//       body: “have updated something nice”,
//     });
//   }, 5000); // Force an update after 5s
// }, []);