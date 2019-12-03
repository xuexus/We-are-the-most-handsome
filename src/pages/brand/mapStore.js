import {BrandActionAsync} from "../../actions/brand/brandActionCreator"


export const mapStateToProps = (state)=>({
    data:state.brand.data
})


export const mapDispatchToProps = (dispatch)=>({
    handleBrand(brandid){
        dispatch(BrandActionAsync(brandid))
    }
})