import {loginAsyncAction} from "@/actions/week/weekActionCreates"

export const mapStateToProps = (state)=>({
    date:state.login.date
})


export const mapDispatchToProps = (dispatch)=>({

    handleValone(e){
        let val=e.target.value;
        this.setState({
            valone:val
        },()=>{
            // console.log(this.state.username)
        })
    },
    handleValtwo(e){
        let val=e.target.value;
        this.setState({
            valtwo:val
        },()=>{
            // console.log(this.state.password)
        })
    },
    handleYanzheng(){
        dispatch(loginAsyncAction(this.state.valone,this.state.valtwo));
    }
})