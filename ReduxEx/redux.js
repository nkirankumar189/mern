//import create store function from redux
const {createStore} = require("redux");
//createstore is used to create the store

//initialstate

const initialstate={
    bal:10000
}

//create the reducer

const reducer=(state=initialstate,action)=>{
       switch(action.type){
           case "WITHDRAW":
             return{
                 bal:state.bal-action.amount
             }
           case "DEPOSIT":
          return{
              bal:state.bal+action.amount
          }
           default:

           return state;

       }
}



//store definition
 const store=createStore(reducer);

 //subcribe

 store.subscribe(()=>{
     console.log(store.getState())
 })

 //dispatch

 store.dispatch({type:"WITHDRAW",amount:2000});
 store.dispatch({type:"DEPOSIT",amount:5000});
 store.dispatch({type:"WITHDRAW",amount:3000});
 store.dispatch({type:"DEPOSIT",amount:1000});