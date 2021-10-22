import react, { Component } from "react";
import {connect} from 'react-redux';
import React from "react";
class App extends Component{
  constructor(props){
    super(props);
  }
  fun_one=()=>{
      this.props.age_up()
  }
  fun_two=()=>{
        this.props.age_down()
  }
  render(){
    return(
      <React.Fragment>
        <center>
          <h1>{this.props.age}</h1>
          <button onClick={this.fun_one}>AGE_UP</button>
          <button onclick={this.fun_two}>AGE_DOWN</button>
        </center>
      </React.Fragment>
    )
  }
}
const receive=(state)=>{
     return{
       age:state.age
     }
}

const send=(dispatch)=>{
  return{
    age_up:()=>{dispatch({type:"AGE_UP",value:1})},
    age_down:()=>{dispatch({type:"AGE_DOWN",value:2})}
  }
}
export default connect(receive,send)(App);