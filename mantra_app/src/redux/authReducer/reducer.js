import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionType";
const inititalState={
    isAuth:false,
    isLoad:false,
    isErr:false,
    token:""
}


export const reducer=(state=inititalState,{type,payload})=>{
switch(type){
    case LOGIN_SUCCESS:
        return {...state,isLoad:false,isAuth:true,token:payload}
    case LOGIN_REQUEST:
        return {...state,isLoad:true}
    case LOGIN_FAILED:
        return {...state,isLoad:false,isErr:true}
    case LOGOUT:
        return  {...state,isLoad:false,isAuth:false,token:""}
    default :
    return state
}
}