import {DetailsAsync} from "../../actions/details/detailsActionCreator"


export const mapStateToProps = (state)=>({
    deta:state.details.deta
})


export const mapDispatchToProps = (dispatch)=>({
    handleDetails(gid){
        dispatch(DetailsAsync(gid))
    }
})