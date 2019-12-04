import http from "@/utils/request";

export const classifyLeftApi = ()=>http.get({
    url:"/v3/goods/category/main.html",
    data:{
        pet_type:"dog",
        version:358,
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1574997764896
    }
})


export const classifyLeftListApi = (owner)=>http.get({
    url:"/classify/v3/goods/category/main.html",
    data:{
        do:"getChildren",
        owner,
        pet_type:"dog",
        issite:true,
        version:358,
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575111600451
    }
})


export const classifyLeftListTwoApi = (owner)=>http.get({
    url:"/classifyTwo/v3/goods/category/main.html",
    data:{
        do:"getChildren",
        owner,
        pet_type:"dog",
        issite:true,
        version:358,
        ishk:true,
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575119618653
    }
})



export const classifyRightApi = ()=>http.get({
    url:"/classifyRight/v3/brand/list/main.html",
    data:{
        pet_type:"dog",
        system:"wap",
        isWeb:1,
        version:303,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575126675206
    }
})
