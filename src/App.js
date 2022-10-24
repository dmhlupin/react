
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Message } from './components/Message';

const name = 'Dmitry';

const msgs = [
  {
    author: name,
    text: 'text1',
  },
  {
    author: name,
    text: 'text2',
  },
]


export const App = () => {

  const [messages, setMessages] = useState(msgs);


    
  // const [messageList, setMessageList] = useState([]);
  // const [formState, setFormState] = useState({author: '', message: ''});
  // const [robotMessage, setRobotMessage] = useState('');
  // const [message, setMessage] = useState('');
  // let update = false;

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   const author = event.target.author.value;
  //   const message = event.target.message.value;
    
  //   setFormState({ 
  //       author: author,
  //       message: message
  //   });    
  // }

  

  // useEffect(() => {
  //       setRobotMessage('Сообщение проверяется...');
  //       setTimeout(() => {
  //         setRobotMessage('Сообщение проверено!');
  //         setMessageList([...messageList, {key: Id(), author: formState.author, message: formState.message}]);
  //       }, 5000);
  //   }, [formState.author]);

  const addMessage = (newText) => {
    console.log('add Message');
    setMessages([...messages, { text: newText, author: "me" }]);
  };

  return (
    <div className="App">
      {messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))}
      
      <Form onSubmit={addMessage}/>
        {/*<Counter /> */}
        {/* <FuncCounter /> */}
        {/* <form onSubmit={sendMessage}>
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
        <Messages messageList={messageList} /> */}
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