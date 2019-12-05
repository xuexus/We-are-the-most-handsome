import {AppraisalAction} from "../../actions/smallMBook/bookActionCreator"


export const mapStateToProps = (state)=>({
    appraisal:state.smallMBook.appraisal
})


export const mapDispatchToProps = (dispatch)=>({
    handleAppraisal(param,pet_type){
        dispatch(AppraisalAction(param,pet_type))
    }
})