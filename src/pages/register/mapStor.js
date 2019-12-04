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
        })
    },
    handleRegistere(e){
        let val=e.target.value;
        this.setState({
            password:val
        },()=>{
            // console.log(this.state.password)
        })
    },
    handleChuan(){
        dispatch(registerAsyncAction(this.state.username,this.state.password));
    },
   

})