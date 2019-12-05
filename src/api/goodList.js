import http from "@/utils/request";

// export const GoodListApi = (cateid,desc,m)=>http.get({
export const GoodListApi = (cateid,desc,page=1,m="")=>http.get({
    url:"/goodList/v3/goods/list/main.html",
    data:{
        version:358,
        brandid:0,
        page,
        orderby:desc,
        cateid,
        pet_type:"dog",
        extend_pam:m,
        real_wid:'',
        region:'',
        system:"wap",
        isWeb:1,
        distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
        _:1575291533937
    }
})





