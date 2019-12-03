const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
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
    }))
}








