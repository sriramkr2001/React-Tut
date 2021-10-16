import React,{Component} from 'react'

import './Propsnavapp.css';
import Greet,{Nav,ExampleComponent} from './Propsnavuser.js';






// props in React 

function Propsnavapp() {
  
return(
    
<div className="Propsnavapp">
<Greet name="Bruce" heroName="Batman"><p>This is Children props</p></Greet>
<Greet name="Charles" heroName="Superman"></Greet>
<Greet name="Dianna" heroName="WonderWomen"></Greet>
<Nav></Nav>
<br></br>
<ExampleComponent></ExampleComponent>
<br></br>

</div>
    
);
 } 



// Exporting the App Functional Component 
export default Propsnavapp;
