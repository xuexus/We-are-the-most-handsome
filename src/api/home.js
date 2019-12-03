import http from "@/utils/request"


export const homeApi = () => http.get({
    url: "/ajax/v3/index/main.html",
    data: {
        do:"getStaticV415",
        cdn_version:20191130220236,
        pet_type:"dog",
        version:435,
        is_single:0,
        isWeb:1,
        system:"wap",
        distinct_id:""
    }
})



// https://mall.api.epet.com/v3/index/main.html?do=getDynamicV415&pet_type=dog&version=435&is_single=0&isWeb=1&system=wap&distinct_id=

// https://mallcdn.api.epet.com/v3/index/main.html?do=getStaticV415&cdn_version=20191130163318&pet_type=dog&version=435&is_single=0&isWeb=1&system=wap&distinct_id=