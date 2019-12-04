import {classifyLeftAsyncAction,classifyLeftListAsyncAction} from "@/actions/classify/classifyActionCreator"


export const mapStateToProps = (state)=>({
    data:JSON.parse(localStorage.getItem("classifyLeft")) || state.classify.data,
    list:state.classify.list[0]?state.classify.list:JSON.parse(localStorage.getItem("classifyLeftList"))
})

export const mapDispatchToProps =(dispatch)=>({
    handleClassifyLeft(){
        dispatch(classifyLeftAsyncAction())
    },

    handleClassifyLeftList(cateid){
        dispatch(classifyLeftListAsyncAction(cateid))
    }
})