import React from 'react'

function Greet(props){
  console.log(props) 
   return (
    <div>
         <h1>Hello {props.name} are u {props.heroName} ??</h1>
    {props.children}  
    </div>
 
    
    );
}

export default Greet;


export function Nav(){
     return(   
<div>
<nav className="Nav">
  <li>Name</li>
  <li>About</li>
  <li>portfolio</li>
  <li>Experience</li>
  <li>Blogs</li>
  <li>Contact-Me</li>
  <li>Resume-Doc</li>
     </nav> 

</div>   
     );       
     }
     export function ExampleComponent() {
  
          function sayHello() {
            alert(`hello john`);
          }
          
          return (
            <button onClick={sayHello}>Greet Hello</button>
          );
        }
        
        //  function sayHello(name) {
        //     alert(`hello ${name}`);
        //   }
          
          // return (
          //   <button onClick={ function(){
          //     return(sayHello('Diana'))}}>Greet</button>
          // );
           
        //   return (
        //     <button onClick={ ()=>{alert("Hey Man My name is "+Name)}}>Greet</button>
        //   );
        // }
        

        // export const ExampleComponent = () => {
          
        //   function sayHello() {
        //     alert(`hello john`);
        //   }
        //   let name="x";
        //   return (
        //     <button onClick={('john')=>{alert(`Hello }!!`)}}>Greet</button>
        //   );
        // }
    
