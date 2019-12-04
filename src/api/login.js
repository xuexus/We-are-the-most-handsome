// import http from "@/utils/request"


// export const loginApi = (username, password ) => http.post({
//     url: ":/users/login",
//     data: {
//         username,
//         password 
//     }
// })


import axios from "axios"


export const loginApi = (username, password ) =>axios({
    method:"post",
    url: "/users/login",
    data: {
        username,
        password 
    }
})