// import http from "@/utils/request"


// export const registerApi = (username, password ) => http.post({
//     url: ":/users/register",
//     data: {
//         username,
//         password 
//     }
// })



import axios from "axios"


export const registerApi = (username, password ) =>axios({
    method:"post",
    url: "/users/register",
    data: {
        username,
        password 
    }
})