


import './App.css';
import './ChatList.css';
import './MessageBox.css';
import { ChatPage } from './pages/ChatPage';
import { StartPage } from './pages/StartPage';
import { UserProfile } from './pages/UserProfile';


import { Header } from './components/Header';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';

export const App = () => {




  return (
    <div className="App">
      <Header />
      <div className='main'>
         <BrowserRouter>
          <div className='main-menu'>
            <Link to='/'> Главная </Link>
            <Link to='chats'> Чаты </Link>
            <Link to='profile'> Профиль </Link>
          </div> 
          <div className='app-container'>
            <Routes>
              <Route path="/" element={ <StartPage/>} />
              <Route path="/react" />
              <Route path="chats" element={ <ChatPage/>}/>
              <Route path="profile" element={<UserProfile />}/>
            </Routes> 
          </div>
         </BrowserRouter> 
      </div>
    </div>

  );
}





