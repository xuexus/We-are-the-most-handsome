import React from "react";
import { SearchStyled } from "./styled";
import {withRouter } from "react-router-dom"
@withRouter
class Search extends React.Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
    render() {
        let {search}=this.state
        return (
            <SearchStyled>
                <div className="search">
                    <div className="search_title">
                        <p onClick={this.handleBack.bind(this)}>&lt;</p >
                        <input type="text" placeholder="搜索你喜欢的宝贝" value={search} onChange={this.handleSou.bind(this)}/>
                        <span onClick={this.handleSuo.bind(this)}>搜索</span>
                        < img src="https://static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png" alt="" />
                    </div>


                    <div className="search_recommend">
                        < img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt="" />
                        <span>精品推荐</span>
                    </div>


                    <div className="search_recommend_list">
                        <p>now</p >
                        <p>狗笼子</p >
                        <p>狗狗奶粉</p >
                        <p>now</p >
                        <p>狗笼子</p >
                        <p>狗狗奶粉</p >
                        <p>now</p >
                        <p>狗笼子</p >
                        <p>狗狗奶粉</p >
                        <p>now</p >
                        <p>狗笼子</p >
                        <p>狗狗奶粉</p >
                    </div>

                    <div className="search_recommend">
                        < img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt="" />
                        <span>最近搜索</span>
                    </div>


                    <div className="search_recommend_lists">
                        <p>宠</p >
                        <p>宠</p >
                        <p>宠</p >
                    </div>

                    <div className="search_history">清空搜索历史</div>
                </div>
            </SearchStyled>
        )
    }
    // 返回
    handleBack(){
        this.props.history.goBack()
    }
    handleSou(e){
        let val=e.target.value;
        this.setState({
            search:val
        },()=>{
            console.log(this.state.search)
        })
        
    }
    handleSuo(){
        console.log(this.state.search)
        this.props.history.push("/goodList/"+0+"/"+this.state.search)
        
    }
}


export default Search;