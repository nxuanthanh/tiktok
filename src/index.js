import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import Container from './Container';

function emitComponent(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,
        { detail: `Nội dung comment của lesson-${id}` }))
  }, 2000)
}

emitComponent(1)
emitComponent(2)
emitComponent(3)

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Container />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
