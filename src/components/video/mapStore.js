import {VideoAction} from "../../actions/smallMBook/bookActionCreator"


export const mapStateToProps = (state)=>({
    video:state.smallMBook.video
})


export const mapDispatchToProps = (dispatch)=>({
    handleVideo(param,pet_type){
        dispatch(VideoAction(param,pet_type))
    }
})