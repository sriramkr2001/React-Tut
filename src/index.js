import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Propsnavapp from './TUT/Propsnavapp';
import User from './User';
import reportWebVitals from './reportWebVitals';

// let a, b, rest;

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// let people=[1,2,3,4,5]
// const people1=people.map(function(sup){
//   console.log("Sup Man")
//   console.log("How are you")
// return(sup+10)});
// console.log(people1,people);

let a;
 function A(){
   console.log("A");
   return 10;
 }
 function B(){
   return (A());
 }

//  a=B();
 a=B();
console.log(a+a);
console.log("Hey")




ReactDOM.render(
  // <React.StrictMode>

  //  <App/>
   

  // </React.StrictMode>,
  <> 
  {/* <Propsnavapp/> */}
  <App/>
  </>

  ,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
