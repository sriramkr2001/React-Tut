
// State and Event Binding in react 

// ***********1.Basics of state in react******************************
import React,{Component} from 'react'
import Particles from 'react-particles-js';
import ParticlesConfig from './ConfigParticles.js';

// class Message extends Component {
//     constructor() {
//          super() 
//          this.state = {
//              message: 'Welcome Visitor' 
//          } 
//            this.Sup=this.Sup.bind(this)
//     }

 
    
//     changeMessage(){
//          console.log(this)
//          this.setState({
//             message:  'Thank you For Subscribing'
//          })
//     }
//     Sup1(){
//          console.log("Hey BuddyBoy")

//     }
//      Sup() {
//           this.Sup1();
//           // console.log(this)
//           console.log("Hey Man")
//           return("Hey Man")
//      }
 

//      render(){
//           let z=1;
//           console.log(z)
//           console.log(this.Sup())
//           return(
//                <>
//              <h1>{this.Sup()}</h1>  
               
                   
// <h1>Hey! Welcome {this.props.name} a.k.a {this.props.heroName} pleasure meeting you !! So, {this.props.children}
         
//               </h1>

//               <h1>    
//                  hey {this.state.message}
//                 </h1>

//                  <button onClick={()=>{console.log(this);
//                        this.changeMessage()} }>Subscribe</button> 
//                  <br></br>
//                  <button onClick={this.changeMessage.bind(this) }>Subscribe</button> 
//                  <br></br>
//                  <button onClick={ ()=>(this.changeMessage())}>Subscribe</button> 
                 
//                  <br></br>
//                  <button onClick={ ()=>
//                   this.Sup()
//                     }>Subscribe</button> 
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                </>
              
//           )
//      }
// }

// export default Message


// ***********1.Basics of state in react //******************************


// **************2.Binding of Event Handlers in React*******************

//  export class Message1 extends Component {
   
//      constructor() {
//           super() 
//           this.state = {
//               message: 'Welcome Visitor',
//               count:1
//           }
// this.ChangeState=this.ChangeState.bind(this);
//         this.a=10;
//      }
     
//       ChangeState(){
//                this.setState({
//                  count:this.state.count+1
//                })
//           }  
//           ClickedMe=()=>{    
             
//                this.a+=100;
//                console.log(this.a);
//                console.log('He clicked the button babe !')
//           }

//  render() {
     


//       return(
            
//             <>
            
//             <h1>{this.state.count}</h1>
            
//            <button onClick={()=>{
//                console.log(this.state)
//                this.ChangeState()}}>Click Button</button>

//            <button onClick={this.ChangeState}>Click Button</button>
//                {/* Other two are, binding in the render method, within the definition of the onclick object  this causes binding to occur every time the component is rerendered when the props-properties of a componenent change*/}

//                {/* Another MEthod is to declare the event handler function as an arrow function so that it takes the this context as the reference to the current Message1 component */}
//      <br/>
//      <br/>
//      <br/>
//     <button onClick={this.ClickedMe}>Click Man</button>
//            <br/>
//            Sup!
//              </>
           
           
//           //  Four methods of Binding Event handlers
         
//       )
//  }
// }


// **************2.Binding of Event Handlers in React //*******************


// **********3. Passing Methods as props , to be called in child component********
       export class ChildComponent extends Component  
       {
            constructor(props) {
                 super(props)
            
               //   this.state = {
                       
               //   }
            }
            

            render() {
                       return (
                    <div>
                        <button onClick={this.props.greetHandler}>Click Me!</button> 
                        <br/>
                        <br/>
                        <br/>
                        <button onClick={()=>{this.props.greetHandler1('Babyy')}}>Click Me!</button> 
                        <br/>
                           <h1>Sup !</h1> 
                        <hr/>
                       </div>
                       );
            }
         
          }            
                   
         export class ParentComponent extends Component 
         {
               constructor(props){
                    super(props)

                    this.state={
                         parentName: 'Parent'
                    }

                    this.greetParent=this.greetParent.bind(this)
                    this.greetParent1=this.greetParent1.bind(this)
               }

               greetParent() {
                    alert(`Hello ${this.state.parentName}`)
               }

               greetParent1(item) {
                    alert(`Hello ${item+555} How Are u Doing Buddy !`)
               }

               render() {
                    return(
                      
                   
                          <div >
                                <h1>Hey !</h1>
                               <ChildComponent greetHandler={this.greetParent} greetHandler1={this.greetParent1}></ChildComponent>
                            
                               <ChildComponent greetHandler={this.greetParent} greetHandler1={this.greetParent1}></ChildComponent>

                               </div>
                         );
               }
          }    
          
          

          // We have to also see how we can alter the state of a parent component through the methods we invoke in the child components passed to them as props ------------- useState Hooks 

                      
                  


    // **********3. Passing Methods as props , to be called in child component //********



     // ************************* 4. Conditional Rendering******************************* 
         






export class UserGreeting extends Component {
     constructor(props) {
          super(props)
     
          this.state = {
                isLoggedin: false
          }
          this.Sup=this.Sup.bind(this)

     }
     
     Sup(){
          // alert("Hey MAN")
          this.setState({
               isLoggedin:!this.state.isLoggedin
          })
     }
 
     // Method 1 : If Else statements and individual return statement blocks 


     // render() {
         
     //      if(this.state.isLoggedin) {
     //          return (
                  
     //           <div> 
     //                 <button onClick={()=>{this.Sup()}}>Click Me !</button>

     //             <div>   <h1>Welcome Sriram</h1> </div>
                   
     //             {/* <div>Welcome Guest</div> */}
     //           </div>
     //      )  
     //      }
     //      else {
     //           return (
     //                <div>
     //                     <button onClick={()=>{this.Sup()}}>Click Me !</button>
     //                  {/* <div> Welcome Sriram</div> */}
     //                  <div>
     //                       <h6>   Welcome Guest </h6>
                           
     //                    </div>
     //                </div>
     //           )    
     //      }
         
     // }

     // Method 2: Use of a Variable 
     render(){

          let message =  this.state.isLoggedin ? "Welcome User" : "Welcome Sriram"
          let message1;
          if(this.state.isLoggedin)
          message1="Yippie"
          else 
          message1="Maggie"


 return (         

 

<div>
   <br /> 


   {/* <div className="Particles" style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={ParticlesConfig} />
      </div> */}
      <button onClick={this.Sup}>Click Me !</button>
    <div>{message}</div>
    <div>{message1}</div>
    {/* <div className="HelloMAN">

    Sup!
    
</div> */}
<button onClick={this.Sup}>Click Me !</button>
    <div>{message}</div>
    <div>{message1}</div>
    </div>
   ) 


              

       
     }
}




     
          
 
          
      
          