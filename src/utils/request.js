import {fetch as fetchPolyfill} from "whatwg-fetch";
import qs from "qs"

const get = (options)=>{
    let url = options.url;
    let data = options.data;

    if(data){
        var str="";
        for(var key in data){
            str += "&"+key+"="+data[key]
        }
        url += "?"+str.slice(1)
    }


    var result = fetchPolyfill(url,{
        headers:{
            "content-type":"application-json",
            ...options.headers
        }
    }).then(res=>res.json())

    return result
}

const post = (options)=>{
    var result = fetchPolyfill(options.url,{
        method:options.mathod,
        body:qs.stringify(options.data),
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        }
    }).then(res=>res.json())
    return result
}


export default {
    get,
    post
}