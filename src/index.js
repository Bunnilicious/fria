import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addNewMessage} from './redux/state'
import './index.css';
import state from './redux/state'


export const renderDOM = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} dialogs={state.dialogs} messages={state.messages} addNewMessage={addNewMessage} />
    </React.StrictMode>
  );
}
renderDOM(state)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
