import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILUER, PRODUCT_REQUEST } from "./actionType";

const inititalState={
    isLoad:"false",
    isErr:"false",
    products:[]
}

export const reducer=(state=inititalState,{type,payload})=>{
    console.log(type,payload)
switch(type){
    case PRODUCT_REQUEST:
        return {...state,isLoad:true}
    case PRODUCT_FAILUER:
        return {...state,isLoad:false,isErr:true}
    case GET_PRODUCT_SUCCESS:
        return {...state,isLoad:false,products:[...payload]}
    case POST_PRODUCT_SUCCESS:
        return {...state,isLoad:false,products:[...state.products,payload]}  
    
        default:
        return state;
}
}