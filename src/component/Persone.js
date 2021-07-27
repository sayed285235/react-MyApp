
import React, { Component } from "react";


// function Component
// function Persone() {
//     return(
//       <div>
//         <p> Hello Bangladesh</p>
//         <p> Hello Bangladesh</p>
//       </div>
//     );
//   }


  // arrow function
  // let Persone = (data) =>{
  //   return(
  //     <div>
  //       <h2>Name : {data.name}</h2>
  //       <h5>Age : {data.age}</h5>
  //       <p> Exta Text : {data.children}</p>
  //     </div>
  //   );
  // }



  // class Component
  class Persone extends Component {
    constructor(props){
      super(props);
    }
    render(){
      console.log(this.props);
      return(
        <div>
          <h2>Name : {this.props.name}</h2>
          <h5>Age : {this.props.age}</h5>
          <p> Exta Text : {this.props.children}</p>
        </div>
      );
    }
  }


export default Persone;