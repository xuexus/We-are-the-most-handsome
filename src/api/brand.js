import http from "@/utils/request";

export const BrandActionApi = (brandid)=>http.get({
    url:"/brand/v3/brand/detail/main.html",
    data:{
        brandid,
        version:355,
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575372098550
    }
})