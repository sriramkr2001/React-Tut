import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import ParticlesConfig from './ConfigParticles.js';

// import Greet,{Nav,ExampleComponent} from './User.js';

//** */ 1,2 basics of state and Binding Event handlers**
// import Message,{Message1} from './User.js'


// **3.Passing Methods as Props**
//  import {ParentComponent,ChildComponent} from './User.js'


//   ** 4.Conditional rendering ** 
 
import {UserGreeting} from './User.js'


















// ******************* 1 and 2 **************************** 
// props in React ,Bascis of State, Binding Event Handlers 

// function App() {
  
// return(
    
// <div className="App">

//  {/* props in React ,Bascis of State */}
// <Message name="Sara" heroName="AliasGirl">What's up Man</Message>
// {/* Binding Event Handlers  */}
// <Message1/>


// </div>
    
// );
//  } 

// ************************ 1 and 2 // ***************************** 


// Exporting the App Functional Component 
// export default App;

// **************** 3 Passing Methods as Props***************************

// function App(){
//     return(
//         <div className="App">

// <ParentComponent/>


// <h1>Hello Everyone !</h1>
// <h2>Hello Everyone !</h2>
// <h3>Hello Everyone !</h3>
// <h4>Hello Everyone !</h4>
// <h5>Hello Everyone !</h5>
// <h6>Hello Everyone !</h6>
// <br/>
// <hr/>
// {/* <ChildComponent/> */}


//         </div>
//     );
// }
// export default App;

// *********************3. Passing Methods as Props // ****************************** 



// export class App extends Component {
//     render() {
//         return (
//             <div className="App" >


//    <div className="Particles" style={{ position: 'absolute'}}>
//         <Particles height="100vh" width="100vw" params={ParticlesConfig} />
//       </div>
              
//               <div className="SUPMAN">        <UserGreeting/>
//               <a href="www.google.com"> Hey !</a>
//                </div>
      
              

  
  
      
//             </div>
//         )
//     }
// }

// export default App

function App() {
    return (
      <div className="App">
        <div className="Particles" style={{ position: 'absolute' }}>
          <Particles height="200vh" width="100vw" params={ParticlesConfig} />
        </div>
        <header className="App-header">
      
       {/* <UserGreeting/> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link1"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a> 
          <br />
          {/* <header className="App-header1">  <div className="App-link1">
              <UserGreeting/>
          </div></header> */}
        </header>
 
 <div className="Headerw"> 
  <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
  
 </header>


 <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
   
 </header>

 <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
   
 </header>

</div>
<br />
<div className="Headerw"> 
  <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
  
 </header>


 <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
   
 </header>

 <header className="App-header1">
     <UserGreeting/>
 
     <SupBABE/>
   
 </header>

</div>
<br />
<br />







</div>


// {/* 
//  <header>Babe !!</header> */}


    );
      function SupBABE()
  {
     return (
         
      <a href="https://www.google.com">Hey Babe</a>
      
      

     )
  }
  }
  export default App;



