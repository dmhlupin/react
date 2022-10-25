
import { useEffect, useRef, useState } from 'react';

import './App.css';
import './ChatList.css';
import './MessageBox.css';

import { Form } from './components/Form';
import { Id } from './components/GetId';
import { MessageList } from './components/MessageList';
import { AUTHORS } from './utils/constants';
import { Chats } from './components/Chats';
import { Header } from './components/Header';

export const App = () => {


  const chatList = [
    {
      chatName: 'Макс',
      chatId: Id(),
    },
    {
      chatName: 'Серега',
      chatId: Id(),
    },
    {
      chatName: 'Ирина',
      chatId: Id(),
    },
    {
      chatName: 'Батя',
      chatId: Id(),
    }
  ]

  const [messages, setMessages] = useState([]);

  const timeout = useRef();  // Ссылка на таймаут

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  }

  const sendMessage = (text) => {
    addMessage({ 
      author: AUTHORS.human,
      text,
      id: Id(),
    })
  };


  useEffect(() => {
      // let timeout;
      if (messages[messages.length - 1]?.author === AUTHORS.human) {               // ? - optional chaining. Проверяет объект на null, undefined
        timeout.current = setTimeout(() => {
          addMessage({ 
            author: AUTHORS.robot,
            text: "Your message added!",
            id: Id(),
          });
        }, 1000);
      }
      return() => {             // возвращаем каллбэк, который сработает при размонтировании компонента и очистит таймаут
        clearTimeout(timeout.current);
      }
    }, [messages]);


  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className='message-box'>
        <div className='chat-list'>
          <header>Список чатов:</header>
          <Chats chatList={chatList} />
        </div>
          <Form onSubmit={sendMessage}/>
        </div>
        <div className='message-list'>
          <MessageList messageList = {messages} />
        </div>
        
      </div>
    </div>

  );
}
