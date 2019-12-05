import {homeApp} from "./weekActionTypes";
import {homeApi} from "@/api/home";
import {registerApp} from "./weekActionTypes";
import {registerApi} from "@/api/register"
import {loginApp} from "./weekActionTypes";
import {loginApi} from "@/api/login"
import {quanbuApp} from "./weekActionTypes";
import {quanbuApi} from "@/api/quanbu"
import {createAction} from "redux-actions"
// 首页
export const homeAsyncAction = ()=>{
    let homeAction = (data)=>({
        type:homeApp,
        data
    })
   
    return async (dispatch)=>{
        
        let data = await homeApi()
        // console.log(data.datas)
        dispatch(homeAction(data.datas))
    }
}

// 注册
export const registerAsyncAction = (username,password)=>{
    let registerAction = createAction(registerApp,data=>data)
   
    return async (dispatch)=>{
        
        let data = await registerApi(username,password)
    
        if(data.data.data.status===1){
            alert(data.data.data.info)
            sessionStorage.setItem("userInfo",JSON.stringify({username:username,password:password}))
            dispatch(registerAction(data.data.data))
            return data.data.data.status;
        }else{
            alert(data.data.data.info)
        }
       
    }
}


// 登录
export const loginAsyncAction = (username,password)=>{
    let loginAction = createAction(loginApp,data=>data)
    
    return async (dispatch)=>{
        
        let data = await loginApi(username,password)
        if(data.data.data.code===1){
            alert(data.data.data.info)
            sessionStorage.setItem("userInfo",JSON.stringify({username:username,password:password}))
            dispatch(loginAction(data.data.data))
            return data.data.data;
        }else{
            alert(data.data.data.info)
        }

    }
}


// 全部商品
export const quanbuAsyncAction = ()=>{
    let quanbuAction =createAction(quanbuApp,data=>data)
   
    return async (dispatch)=>{
        
        let data = await quanbuApi()
        // console.log(data.brand)
        dispatch(quanbuAction(data.brand))
    }
}
