import http from "@/utils/request"


export const quanbuApi = () => http.get({
    url: "/ajax/v3/brand/list/main.html",
    data: {
       do:"getall",
       system:"wap",
       isWeb:1,
       version:303,
       distinct_id:"%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2",
       _:1575515762727
    }
})


// https://mallcdn.api.epet.com  /v3/brand/list/main.html?do=getall&system=wap&isWeb=1&version=303&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1575515762727