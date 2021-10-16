import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';

import User from './User'
import {Class_Comp} from './User'
function App() {
 
  // Functional Component within Functional Component 
  function Within_Functioal_Component(){
return(
  <div>
            <hr />
           <p>Functional Component within Functional Component </p>
            <h1>Hello bruHammed!</h1>
            <hr/>
       </div>
)
  }
  return (
  
    <div className="App">
      <hr/>
    <h1>Hello World !</h1>
    <hr/>
 <User />
 <Class_Comp></Class_Comp>
 <SameFile></SameFile>
 <SameclasscompFile></SameclasscompFile>
 <Within_Functioal_Component></Within_Functioal_Component>
 <Classcompwithincc/>
 <Classcompwithincc/>
 <Classcompwithincc/>
    </div>
  
  );
}
// Functional Component Within the same File 
function SameFile(){
  return(<div><h1>Hello Pal!</h1><p>Functional Components same file</p><hr/></div>)
}
// Class Component within the same File 
 class SameclasscompFile extends Component
 {
  render()
    { 
       return(<div>
            <hr />
           <p>Class-Components same File</p>
            <h1>Hello bruski!</h1>
            <hr/>
       </div>
      ) 
}
 }
// Class Component within the Class component in the same file 
// No Export or import here 
 class Classcompwithincc extends Component
 {
  

  render()
    { 
      class Innercc extends Component
  {
   render()
     { 
        return(<div>
             <hr />
            <p>Inner Class Component</p>
             <h1>Hello bruh!</h1>
             <hr/>
        </div>
       ) 
 }
  }
       return(<div>
            <hr />
         
            <h1>Hello bruski!</h1>
             <Innercc/>
             <Innercc/>
             <Innercc/>
            <hr/>
       </div>
      ) 
}

 } 



// Exporting the App Functional Component 
export default App;
