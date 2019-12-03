const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:" https://mallcdn.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":''
        }
    }))
    app.use("/users",proxy({
        target:" http://39.105.204.151:3000",
        changeOrigin:true,
    }))
}




// /v3/goods/category/main.html?pet_type=dog&version=358&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1574997764896


// https://mallcdn.api.epet.com/v3/index/main.html?do=getStaticV415&cdn_version=20191130220236&pet_type=dog&version=435&is_single=0&isWeb=1&system=wap&distinct_id=






