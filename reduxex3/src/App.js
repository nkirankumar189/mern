import React from 'react';
import react,{Component} from 'react';
import {connect} from 'react-redux';

class App extends Component{
  constructor(props){
      super(props);
  }
  
  fun_one=()=>{
        this.props.withdraw()
  };

  fun_two=()=>{
      this.props.deposit()
  };



  render(){
    
    return(
      <React.Fragment>
      <center>
        <h1>{this.props.bal}</h1>
        <button onClick={this.fun_one}>WITHDRAW</button>
        <button onClick={this.fun_two}>DEPOSIT</button>
      </center>
      </React.Fragment>
    )
  }
};
const receive=(state)=>{
     return{
          bal:state.bal
     }
}

const send =(dispatch)=>{
  return{
          withdraw:()=>{dispatch({type:"WITHDRAW",value:2000})},
          deposit:()=>{dispatch({type:"DEPOSIT",value:5000})}
  }
}
export default connect(receive,send)(App);