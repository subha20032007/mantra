import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILUER, PRODUCT_REQUEST } from "./actionType"
import axios from "axios"

export const getAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}
export const postAction=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}

export const requestAction=()=>{
    return {type:PRODUCT_REQUEST}
}
export const failuerAction=()=>{
    return {type:PRODUCT_FAILUER}
}

export const addProduct=(newProduct)=>(dispatch)=>{
  dispatch(requestAction())
    axios.post(`http://localhost:9090/products`,newProduct)
    .then((res)=>{
        console.log(res.data)
    dispatch(postAction(res.data))
    }).catch((err)=>{
        dispatch(failuerAction())
        console.log(err)
    })
}
