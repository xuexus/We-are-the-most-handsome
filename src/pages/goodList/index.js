import React from "react";
import { GoodsListStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class GoodsList extends React.Component {
    constructor(){
        super()
        this.state={
            num:0
        }
    }
    render() {
        let { goodList } = this.props
        let {num} = this.state
        console.log(goodList)
        return (
            <GoodsListStyled>
                <div className="goodsList">
                    <div className="goodsList_search">
                        <div>
                            <i></i>
                            <p>点击搜索商品</p>
                        </div>
                    </div>

                    <div className="goodsList_nav">
                        <ul>
                            <li className={num===0?'active':''} onClick={this.handleSort.bind(this,0)}>
                                <span>默认<span className="vvv">v</span></span>
                            </li>
                            <li className={num===1?'active':''} onClick={this.handleSort.bind(this,1)}>
                                <span>销量</span>
                            </li>
                            <li className={num===2?'active':''} onClick={this.handleSort.bind(this,2)}>
                                <span>价格</span>
                                <i></i>
                            </li>
                            <li className={num===3?'active':''} onClick={this.handleSort.bind(this,3)}>
                                <span>筛选</span>
                                <b></b>
                            </li>
                        </ul>
                    </div>


                    <div className="goodsList_content">
                        {
                            goodList.map(item => {
                                return (
                                    <div className="goodsList_content_list" key={item.gid}>
                                        <img src={item.photo} alt="" />
                                        <div className="goodsList_list_right">
                                            <h2>{item.subject}</h2>
                                            <i></i>
                                            <h3>¥{item.sale_price}</h3>
                                            <h4>
                                                <span>{item.comments}</span>&nbsp;&nbsp;
                                                <span>{item.sold}</span>
                                            </h4>
                                            <div>
                                                <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </GoodsListStyled>
        )
    }
    componentDidMount() {
        this.props.handleGoodList(this.props.match.params.id_param)
    }
    handleSort(index){
        if(index===2){

        }
        this.setState({
            num:index
        })
    }
}

export default GoodsList;