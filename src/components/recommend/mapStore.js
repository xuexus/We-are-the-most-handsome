import {FiveAsyncAction,RecommendAction} from "@/actions/smallMBook/bookActionCreator"



export const mapStateToProps = (state)=>({
    five:state.smallMBook.five,
    list:state.smallMBook.list
})


export const mapDispatchToProps = (dispatch)=>({
    handleFive(){
        dispatch(FiveAsyncAction())
    },
    handleRecommend(){
        dispatch(RecommendAction())
    }
})