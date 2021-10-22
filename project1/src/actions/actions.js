export const ageup=()=>{
      return{type:"AGE_UP",value:1}
}

export const agedown=()=>{
    return{type:"AGE_DOWN",value:1}
}

export const ageupsync=()=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(ageup());
        },5000)
    }
} 

export const agedownsync=()=>{
    return(dispatch)=>{
         setTimeout(()=>{
            dispatch(agedown());
         },5000)
    }
}