import {registerAsyncAction} from "@/actions/week/weekActionCreates"

export const mapStateToProps = (state)=>({
    date:state.register.date
})


export const mapDispatchToProps = (dispatch)=>({

    handleRegister(e){
        let val=e.target.value;
        this.setState({
            username:val
        },()=>{
            // console.log(this.state.username)
            if(this.state.username && this.state.password){
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
    handleRegistere(e){
        let val=e.target.value;
        this.setState({
            password:val
        },()=>{
            // console.log(this.state.password)
            if(this.state.username && this.state.password){
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
    async handleChuan(e){
        e.preventDefault();
        let data=await dispatch(registerAsyncAction(this.state.username,this.state.password));
        if(data.code===1){
            this.props.history.push("/login")
        }
    },
})