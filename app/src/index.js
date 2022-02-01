import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from "./components/HelloCoponent"
//Function component
// function HelloComponent(){
//   return <h1>Hello Component</h1>  
// }

//Class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello Class Component</h1>
//   }
// }

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
