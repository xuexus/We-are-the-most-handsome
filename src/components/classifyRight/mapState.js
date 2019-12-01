import {classifyRightAsyncAction} from "@/actions/classify/classifyActionCreator"


export const mapStateToProps = (state)=>({
    rightData:state.classify.rightData
})


export const mapDispatchToProps = (dispatch)=>({
    handleClassifyRight(){
        dispatch(classifyRightAsyncAction())
    }
})