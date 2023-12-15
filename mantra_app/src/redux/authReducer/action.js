import { LOGIN, LOGIN_FAILED, LOGIN_REQUEST, LOGOUT } from "./actionType"

export const loginsuccesAction=(payload)=>{

    return{type:LOGIN_SUCCESS,payload}
}
export const loginrequestAction=()=>{

    return{type:LOGIN_REQUEST}
}
export const loginfailuerAction=()=>{

    return{type:LOGIN_FAILED}
}
export const logoutAction=()=>{
    return {type:LOGOUT}
}