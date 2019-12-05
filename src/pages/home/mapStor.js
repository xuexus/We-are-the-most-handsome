import {homeAsyncAction} from "@/actions/week/weekActionCreates"
export const mapStateToProps = (state)=>({
    mes:state.home.mes
})

export const mapDispatchToProps = (dispatch)=>({
    // 加入购物车
    handleMyCart(gid,e){
        e.stopPropagation();
        this.state.flag=true;
        // console.log(gid)
        this.state.storage=window.localStorage.getItem("CART");
        if(!this.state.storage){
            this.state.storage=[];//如果是个新用户：初始化出一个新的空数组
        }else{
            this.state.storage=JSON.parse(this.state.storage);
        }
        let _has=0;
        if(/^\d+$/gim.test(gid.gid+"")){
            for(let i=0;i<this.state.storage.length;i++){
                if(this.state.storage[i].id===gid.gid){
                    this.state.storage[i].counter++;
                    _has=1;
                    break;
                }
            }
        }
        if(_has===0){
            this.state.storage.push({
                id:gid.gid,
                counter:1,
                img:gid.good_image.img_url,
                show:gid.subject,
                price:gid.sale_price
            })
        }
        window.localStorage.setItem("CART",JSON.stringify(this.state.storage))
        
        this.forceUpdate();
    },
    // 去购物车
    handleGo(){
        this.props.history.push("/cart");
    },
    handleJiXu(){
        this.state.flag=false;
        this.props.history.push("/home");
        
    },
    handleHomeAsyncData(){
        dispatch(homeAsyncAction())
    }
})