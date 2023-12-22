import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGOUT } from "./actionType"
import axios from "axios"
export const loginsuccessAction=(payload)=>{
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

export const loginAction=(userData)=>(dispatch)=>{
    dispatch(loginrequestAction())
    axios.post(`https://reqres.in/api/login`,userData)
    .then((res)=>{
        dispatch(loginsuccessAction(res.data.token))
      //console.log(res.data.token)
    }).catch((err)=>{
        dispatch(loginfailuerAction())
      //console.log(err)
    })
}