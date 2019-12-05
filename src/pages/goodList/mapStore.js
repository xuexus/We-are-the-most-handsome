import {GoodListAsync} from "../../actions/goodList/goodListActionCreator"


export const mapStateToProps = (state)=>({
    goodList:state.goodList.goodList
})


export const mapDispatchToProps = (dispatch)=>({
    handleGoodList(cateid,desc,m){
        dispatch(GoodListAsync(cateid,desc,m))
    }
})