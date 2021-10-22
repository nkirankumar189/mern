//initialstate

import { bindActionCreators } from "redux"

const initialState={
    age:22
}
//reducer

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
         return{
             ...state,
             age:state.age+action.value
         }
        case "AGE_DOWN":
            return{
                ...state,
                age:state.age-action.value
            }

        default:
            return state;
    }
}

export default reducer;