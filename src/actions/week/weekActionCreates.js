import {homeApp} from "./weekActionTypes";
import {homeApi} from "@/api/home";
import {registerApp} from "./weekActionTypes";
import {registerApi} from "@/api/register"
import {loginApp} from "./weekActionTypes";
import {loginApi} from "@/api/login"


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
    let registerAction = (data)=>({
        type:registerApp,
        data
    })
   
    return async (dispatch)=>{
        
        let data = await registerApi(username,password)
        // console.log(data)
        dispatch(registerAction(data))
    }
}


// 登录
export const loginAsyncAction = (username,password)=>{
    let loginAction = (data)=>({
        type:loginApp,
        data
    })
   
    return async (dispatch)=>{
        
        let data = await loginApi(username,password)
        // console.log(data)
        dispatch(loginAction(data))
    }
}
