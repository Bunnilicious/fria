
// import { renderDOM } from '../../src/render.js';

let renderDOM = () => {
 console.log('changed');
}

let state = {
 messages: [
  { id: '2', name: 'Alex', message: 'hello', date: '18:32' }
 ],
 dialogs: [
  { id: '1', name: 'oleg', message: 'jfshdkjk' },
  { id: '2', name: 'alex', message: '1' },
  { id: '3', name: 'cj', message: 'jfshdkjk' },
  { id: '4', name: 'john', message: 'jfshdkjk' },
 ]
}

export const addNewMessage = (msg) => {
 // let messagePostDate = new Date()
 // messagePostDate = `${messagePostDate.getHour()}:${messagePostDate.getMinutes()}`
 let newMessage = {
  id: 5,
  message: msg ,
  date: String(Date.now) 
 }
 state.messages.push(newMessage)
 renderDOM(state)
}


export default state