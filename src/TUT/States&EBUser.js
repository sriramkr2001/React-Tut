
// State and Event Binding in react 

// 1.Basics of state in react 
import React,{Component} from 'react'

class Message extends Component {
    constructor() {
         super() 
         this.state = {
             message: 'Welcome Visitor' 
         }
    }

    
    
    changeMessage(){
         this.setState({
            message:  'Thank you For Subscribing'
         })
    }
     Sup() {
          
          console.log(this)
          console.log("Hey Man")
          return("Hey Man")
     }
 

     render(){
          // console.log(this.Sup())
          return(
               <>
             {/* <h1>{this.Sup()}</h1>   */}
               
                   
<h1>Hey! Welcome {this.props.name} a.k.a {this.props.heroName} pleasure meeting you !! So, {this.props.children}
         
              </h1>

              <h1>    
                 hey {this.state.message}
                </h1>

                 <button onClick={()=>{console.log(this);
                       this.changeMessage()} }>Subscribe</button> 
                 <br></br>
                 <button onClick={this.changeMessage.bind(this) }>Subscribe</button> 
                 <br></br>
                 <button onClick={ ()=>(this.changeMessage())}>Subscribe</button> 
                 
                 <br></br>
                 <button onClick={ ()=>
                  this.Sup()
                    }>Subscribe</button> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
               </>
              
          )
     }
}

export default Message

 export class Message1 extends Component {
   
     constructor() {
          super() 
          this.state = {
              message: 'Welcome Visitor',
              count:1
          }
this.ChangeState=this.ChangeState.bind(this);
        this.a=10;
     }
     
      ChangeState(){
               this.setState({
                 count:this.state.count+1
               })
          }  
          ClickedMe=()=>{    
             
               this.a+=100;
               console.log(this.a);
               console.log('He clicked the button babe !')
          }

 render() {
     


      return(
            
            <>
            
            <h1>{this.state.count}</h1>
            
           <button onClick={()=>{
               console.log(this.state)
               this.ChangeState()}}>Click Button</button>

           <button onClick={this.ChangeState}>Click Button</button>
               {/* Other two are, binding in the render method, within the definition of the onclick object  this causes binding to occur every time the component is rerendered when the props-properties of a componenent change*/}

               {/* Another MEthod is to declare the event handler function as an arrow function so that it takes the this context as the reference to the current Message1 component */}
     <br/>
     <br/>
     <br/>
    <button onClick={this.ClickedMe}>Click Man</button>
           <br/>
           Sup!
             </>
           
           
          //  Four methods of Binding Event handlers
         
      )
 }
}
  
          
         