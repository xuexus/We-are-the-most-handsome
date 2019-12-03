import http from "@/utils/request"



export const DetailsAsyncApi = (gid)=>http.get({
    url:"/details/v3/goods/detail/main.html",
    data:{
        gid,
        extend_pam:"buytype%3A%7Ctid%3A0",
        version:410,
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575345152630
    }
})