import {classifyLeftAsyncAction,classifyLeftListAsyncAction} from "@/actions/classify/classifyActionCreator"


export const mapStateToProps = (state)=>({
    data:state.classify.data,
    list:state.classify.list
})

export const mapDispatchToProps =(dispatch)=>({
    handleClassifyLeft(){
        dispatch(classifyLeftAsyncAction())
    },

    handleClassifyLeftList(cateid){
        dispatch(classifyLeftListAsyncAction(cateid))
    }
})