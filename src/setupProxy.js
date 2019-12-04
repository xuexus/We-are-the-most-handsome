const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
<<<<<<< HEAD
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

=======
    app.use("/v3",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true
    })),
    app.use("/classify",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/classify":""
        }
    })),
    app.use("/classifyTwo",proxy({
        target:"https://mallapi.epetht.com",
        changeOrigin:true,
        pathRewrite:{
            "^/classifyTwo":""
        }
    })),
    app.use("/classifyRight",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/classifyRight":""
        }
    })),
    app.use("/bookFive",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/bookFive":""
        }
    })),
    app.use("/goodList",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/goodList":""
        }
    })),
    app.use("/details",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/details":""
        }
    })),
    app.use("/brand",proxy({
        target:"https://mall.api.epet.com",
        changeOrigin:true,
        pathRewrite:{
            "^/brand":""
        }
    }))
}
>>>>>>> d484ee9a5a8c065a0babab07fb838b0a27c0caa7



// /v3/goods/category/main.html?pet_type=dog&version=358&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1574997764896


// https://mallcdn.api.epet.com/v3/index/main.html?do=getStaticV415&cdn_version=20191130220236&pet_type=dog&version=435&is_single=0&isWeb=1&system=wap&distinct_id=






