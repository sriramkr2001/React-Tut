import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
// import Greet,{Nav,ExampleComponent} from './User.js';
import Message,{Message1} from './User.js'






// props in React 

function App() {
  
return(
    
<div className="App">

<Message name="Sara" heroName="AliasGirl">What's up Man</Message>
<Message1/>


</div>
    
);
 } 



// Exporting the App Functional Component 
export default App;
