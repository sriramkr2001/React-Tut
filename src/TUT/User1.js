import { render } from 'react-dom';
import React,{Component} from 'react'

// Functional Component
function User()
{
 return(
     <div>
 <p>User Component</p>
<h1>Hey Man!</h1>
     </div>
    
     
 )
}
export default User;


// Class Components
export class Class_Comp extends Component
{
    render()
    { 
       return(<div>
            <hr />
           <p>Class-Components</p>
            <h1>Hello Buddy!!!!</h1>
            <hr/>
       </div>
      ) 
    }
}