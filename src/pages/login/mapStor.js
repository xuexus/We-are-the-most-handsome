import {loginAsyncAction} from "@/actions/week/weekActionCreates"

export const mapStateToProps = (state)=>({
    date:state.login.date
    
})


export const mapDispatchToProps = (dispatch)=>({
    // 跳转注册
    handleZhuce(){
        this.props.history.push("/register")
    },
    handleValone(e){
        let val=e.target.value;
        this.setState({
            valone:val
        },()=>{
            if(this.state.valone && this.state.valtwo){
                this.setState({
                    color:true
                })
            }else{
                this.setState({
                    color:false
                })
            }
        })
        
    },
    handleValtwo(e){
        let val=e.target.value;
        this.setState({
            valtwo:val
        },()=>{
            if(this.state.valone && this.state.valtwo){
                this.setState({
                    color:true
                })
            }else{
                this.setState({
                    color:false
                })
            }
        })
        
    },
    async handleYanzheng(e){
        e.preventDefault();
        let data = await dispatch(loginAsyncAction(this.state.valone,this.state.valtwo));
        console.log(data)
        if(data.code===1){
            window.localStorage.setItem("Name",JSON.stringify(data.data.name))
            this.props.history.push("/main")
        }
    }
})