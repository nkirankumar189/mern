
//class  level 
/*
import React from 'react';
import react,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
class App extends Component{
  constructor(props){
     super(props);
  }
     fun_one=()=>{
             this.props.Onageup()
     }
     fun_two=()=>{
                this.props.Onagedown()
     }

  render(){
    return(
      <React.Fragment>
        <h1>{this.props.age}</h1>
        <button onClick={this.fun_one}>AGE_UP</button>
        <button onClick={this.fun_two}>AGE_DOWN</button>
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
      Onageup:()=>dispatch(actions.ageupsync()),
      Onagedown:()=>dispatch(actions.agedownsync())
    }
}
export default connect(receive,send)(App);*/







//functional level component

import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import * as actions from './actions/actions';
function App(){

  const result=useSelector(state=>state);
  const {age} =result;
  const dispatch = useDispatch();
 
 const onageup=()=>{
        dispatch(actions.ageupsync());
  }
 const onagedown=()=>{
           dispatch(actions.agedownsync());
  }

  return(
    <React.Fragment>
      <h1>{age}</h1>
      <button onClick={onageup}>up</button>
      <button onClick={onagedown}>down</button>
    </React.Fragment>
  )
    

  
}
export default App;






