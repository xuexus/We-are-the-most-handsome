import React from "react";
import { GoodsListStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import BScroll from "@/common/bscroll"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class GoodsList extends React.Component {
    constructor(){
        super()
        this.state={
            num:0,
            numP:0,
            srot:[
                {
                    name:"默认排序",
                    path:"def_desc",
                    title:"默认"
                },
                {
                    name:"按人气",
                    path:"views_desc",
                    title:"人气"
                },
                {
                    name:"最新上架",
                    path:"lastupdate_desc",
                    title:"最新"
                },
                {
                    name:"按评论",
                    path:"replys_desc",
                    title:"评论"
                }
            ],
            flag:false,
            def:"默认",
            n:0
        }
    }
    render() {
        let { goodList } = this.props
        let {num,numP,srot,flag,def,n } = this.state
        return (
            <GoodsListStyled>
                {/* <BScroll> */}
                <div className="goodsList">
                    <div className="goodsList_search">
                        <div>
                            <i></i>
                            <p>点击搜索商品</p>
                        </div>
                    </div>

                    <div className="goodsList_nav">
                        <ul>
                            <li className={num===0?'active':''} onClick={this.handleSortDefault.bind(this,0,flag)}>
                                <span>{def}<span className="vvv">v</span></span>
                            </li>
                            <li className={num===1?'active':''} onClick={this.handleSortSales.bind(this,1)}>
                                <span>销量</span>
                            </li>
                            <li className={num===2?'active':''} onClick={this.handleSortPrice.bind(this,2,n)}>
                                <span>价格</span>
                                <i></i>
                            </li>
                            <li 
                            // className={num===3?'active':''} onClick={this.handleSort.bind(this,3)}
                            >
                                <span>筛选</span>
                                <b></b>
                            </li>
                        </ul>
                        <div className="goodListDefault" style={{display:flag?'block':'none'}}>
                            {
                                srot.map((item,index)=>{
                                    return (
                                        <p key={item.name} className={numP===index?'activeP':''} onClick={this.handleDef.bind(this,index)}>{item.name}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    
                    <div className="goodsList_content">
                        {
                            goodList.map(item => {
                                return (
                                    <div className="goodsList_content_list" key={item.gid} onClick={this.handleGoodList.bind(this,item)}>
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
                    {/* </BScroll> */}
            </GoodsListStyled>
        )
    }
    componentDidMount() {
        this.props.handleGoodList(this.props.match.params.id_param,"def_desc")
    }
    handleSortDefault(index,flag){
        this.setState({
            flag:!flag
        })

        // this.props.handleGoodList(this.props.match.params.id_param,"def_desc")
        this.handleSort(index)
    }
    handleSortSales(index){
        this.setState({
            flag:false
        })

        this.props.handleGoodList(this.props.match.params.id_param,"sold_desc")
        this.handleSort(index)
    }
    handleSortPrice(index,n){
        this.setState({
            flag:false
        })

        if(n===0){
            this.setState({
                n:1
            })
            this.props.handleGoodList(this.props.match.params.id_param,"price_asc")
        }else{
            this.setState({
                n:0
            })
            this.props.handleGoodList(this.props.match.params.id_param,"price_desc")
        }
        this.handleSort(index)
    }


    handleDef(index){
        let con = this.state.srot[index].title
        this.setState({
            def:con,
            flag:false,
            numP:index
        })
        this.props.handleGoodList(this.props.match.params.id_param,this.state.srot[index].path)
    }


    handleSort(index){
        this.setState({
            num:index,
        })
    }

    handleGoodList(item){
        this.props.history.push("/details/"+item.gid+"/"+item.sale_price+"/"+item.market_price)
    }
}

export default GoodsList;