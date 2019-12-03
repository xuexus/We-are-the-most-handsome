import {
    Home,
    Classify,
    SmallMBook,
    Cart,
    Main,
    Login,
    Register
} from "@/pages";

export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        text:"精选",
        icon:"\ue642"
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        text:"分类",
        icon:"\ue601"
    },
    {
        path:"/smallMBook",
        component:SmallMBook,
        meta:{
            flag:true
        },
        text:"小萌书",
        icon:"\ue600"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:false
        },
        text:"购物车",
        icon:"\ue657"
    },
    {
        path:"/main",
        component:Main,
        meta:{
            flag:true
        },
        text:"我的",
        icon:"\ue614"
    }
]

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        text:"登录"
    },
    {
        path:"/register",
        component:Register,
        meta:{
            flag:false
        },
        text:"注册"
    }
]

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)