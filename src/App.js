
import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHORS } from './utils/constants';

export const App = () => {

  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  }

  const sendMessage = (text) => {
    addMessage({ 
      author: AUTHORS.human,
      text,
    })
  };


  useEffect(() => {
      let timeout;
      if (messages[messages.length - 1]?.author === AUTHORS.human) {               // ? - optional chaining. Проверяет объект на null, undefined
        timeout = setTimeout(() => {
          addMessage({ 
            author: AUTHORS.robot,
            text: "Your message added!",
          });
        }, 1000);
      }
      return() => {             // возвращаем каллбэк, который сработает при размонтировании компонента и очистит таймаут
        clearTimeout(timeout);
      }
    }, [messages]);


  return (
    <div className="App">
      <MessageList messageList = {messages} />
      <Form onSubmit={sendMessage}/>
    </div>

  );
}
