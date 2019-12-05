import http from "@/utils/request";

export const FiveAsyncActionApi = (param,pet_type)=>http.get({
    url:"/bookFive/v3/content/opgc/Index.html",
    data:{
        do: "GetList",
        param,
        page: 1,
        pet_type,
        system: "wap",
        isWeb: 1,
        version: 303,
        distinct_id: ''
    }
})

