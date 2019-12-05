import {FiveAsyncAction,RecommendAction} from "@/actions/smallMBook/bookActionCreator"



export const mapStateToProps = (state)=>({
    five:state.smallMBook.five,
    list:state.smallMBook.list
})


export const mapDispatchToProps = (dispatch)=>({
    handleFive(){
        dispatch(FiveAsyncAction())
    },
    handleRecommend(param,pet_type){
        dispatch(RecommendAction(param,pet_type))
    },
    handleListFlag(){
        
    },
    handleStar(item){
        let storage = localStorage.getItem("Recommend");
        if(!storage){
            storage=[];
        }else{
            storage=JSON.parse(storage);
        }

        let _has=0;
        for(let i=0;i<storage.length;i++){
            if(storage[i].id===item.data.id){
                storage.splice(i,1);
                _has=1;
                break;
            }
        }
        if(_has===0){
            storage.push({
                id:item.data.id,
                img:item.data.cover.img_url,
                title:item.data.title,
                describe:item.data.describe,
                uesrlogo:item.data.user.avatar.img_url,
                username:item.data.user.username,
                favnums:item.data.favnums
            })
        }
        item.flag=true
        this.forceUpdate()
        window.localStorage.setItem("Recommend",JSON.stringify(storage))
    }
})