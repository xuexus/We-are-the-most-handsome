import React from "react";
import { SearchStyled } from "./styled";
import { withRouter } from "react-router-dom"
@withRouter
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            search: "",
            recommend: [
                "发育宝",
                "心丝虫",
                "诺瑞",
                "渴望",
                "顶间",
                "宝路",
                "钙胃能",
                "澳路雪",
                "生鲜本能",
                "now",
                "窝窝",
                "益生菌",
                "海洋之心",
                "腔骨",
                "狗粮"
            ],
            searchs:[]
        }
    }
    render() {
        let { search, recommend , searchs } = this.state
        return (
            <SearchStyled>
                <div className="search">
                    <div className="search_title">
                        <p onClick={this.handleBack.bind(this)}>&lt;</p >
                        <input type="text" placeholder="搜索你喜欢的宝贝" value={search} onChange={this.handleSou.bind(this)} />
                        <span onClick={this.handleSuo.bind(this)}>搜索</span>
                        < img src="https://static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png" alt="" />
                    </div>


                    <div className="search_recommend">
                        < img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt="" />
                        <span>精品推荐</span>
                    </div>


                    <div className="search_recommend_list">
                        {
                            recommend.map((item, index) => {
                                return (
                                    <p key={index} onClick={this.handleRecommend.bind(this, item)}>{item}</p >
                                )
                            })
                        }
                    </div>

                    <div className="search_recommend">
                        < img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt="" />
                        <span>最近搜索</span>
                    </div>


                    <div className="search_recommend_lists">
                        {
                            searchs.map((item,index)=>{
                                return (
                                    <p key={index} onClick={this.handleRecommend.bind(this,item.content)}>{item.content}</p >
                                )
                            })
                        }
                    </div>

                    <div className="search_history" onClick={this.handleRemove.bind(this)}>清空搜索历史</div>
                </div>
            </SearchStyled>
        )
    }
    componentDidMount(){
        if(localStorage.getItem("search")){
            this.setState({
                searchs:JSON.parse(localStorage.getItem("search")).reverse()
            })
        }
    }
    // 返回
    handleBack() {
        this.props.history.goBack()
    }
    handleSou(e) {
        let val = e.target.value;
        this.setState({
            search: val
        })

    }
    handleSuo() {
        let storage = localStorage.getItem("search");
        if (!storage) {
            storage = [];
        } else {
            storage = JSON.parse(storage);
        }
        
        let _has = 0;
        for (let i = 0; i < storage.length; i++) {
            if (storage[i]. content=== this.state.search) {
                storage.splice(i, 1);
                storage.push({
                    content: this.state.search,
                })
                _has = 1;
                break;
            }
        }
        if (_has === 0) {
            storage.push({
                content: this.state.search,
            })
        }
        window.localStorage.setItem("search", JSON.stringify(storage))
        this.props.history.push("/goodList/" + 0 + "/" + this.state.search)

    }
    handleRecommend(item) {
        this.props.history.push("/goodList/" + 0 + "/" + item)
    }
    handleRemove(){
        window.localStorage.setItem("search", "[]")
        this.setState({
            searchs:[]
        })
    }
}


export default Search;