const {createStore} =require("redux");


const initialstate={
    age:21
}
const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "AGE_DOWN":
         
        return{
            age:state.age-action.value
        }

        case "AGE_UP":

        return{
            age:state.age+action.value
        }


        default: 
          return state;
    }
}



const store=createStore(reducer);




//subscribe


store.subscribe(()=>{
    console.log(store.getState())
});

//dispatch

store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:1});
store.dispatch({type:"AGE-UP",value:1});
store.dispatch({type:"AGE_UP",value:1});