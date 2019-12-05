import {quanbuAsyncAction} from "@/actions/week/weekActionCreates"


export const mapStateToProps = (state)=>({
    data:state.quanbu.data
})

export const mapDispatchToProps = (dispatch)=>({

    handleQuanbuAsyncData(){
        dispatch(quanbuAsyncAction())
    }
})
