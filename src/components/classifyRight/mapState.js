import {classifyRightAsyncAction} from "@/actions/classify/classifyActionCreator"


export const mapStateToProps = (state)=>({
    rightData:JSON.parse(localStorage.getItem("classifyRight")) || state.classify.rightData
})


export const mapDispatchToProps = (dispatch)=>({
    handleClassifyRight(){
        dispatch(classifyRightAsyncAction())
    }
})