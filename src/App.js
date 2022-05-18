import './App.css';
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App(props) {

  return (

    <BrowserRouter>
      <div className='App'>
        <Header />
        <Aside />
        <div class='mainContent'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages dialogs={props.dialogs} addNewMessage={props.addNewMessage} messages={props.messages}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;
