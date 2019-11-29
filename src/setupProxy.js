const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/v3",proxy({
        target:"https://mallcdn.api.epet.com",
        changeOrigin:true
    }))
}
// /v3/goods/category/main.html?pet_type=dog&version=358&system=wap&isWeb=1&distinct_id=%C3%A6%C2%B8%C2%B8%C3%A5%C2%AE%C2%A2&_=1574997764896









