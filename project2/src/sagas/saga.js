//saga


import {put,takeLatest} from 'redux-saga/effects';


export function *modifyamt(action){
       yield put ({type:"WITHDRAW_GST",value:action.value+(action.value*0.18)})
}

export function *withdraw(action){
         yield takeLatest("WITHDRAW",modifyamt)
}