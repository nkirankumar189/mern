// iniutialstate

const initialstate={
    bal:12000
}

//reducer

const reducer=(state=initialstate,action)=>{
          switch(action.type){
            
            case "WITHDRAW":
                return{
                    bal:state.bal-action.value
                }

            case "DEPOSIT":
                return{
                    bal:state.bal+action.value
                }

            default:
                return state;
          }
}
export default reducer;