import { LOGIN, LOGOUT } from "./actionType";
const inititalState={
    isAuth:false,
    isLoad:false,
    isErr:false
}


export const reducer=(state=inititalState,{type,payload})=>{
switch(type){
    case LOGIN:
        return {...state,isLoad:false,isAuth:true}
    case LOGOUT:
        return  {...state,isLoad:false,isAuth:false}
    default :
    return state
}
}