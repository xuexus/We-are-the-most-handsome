import React from "react";
import { BrandStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class Brand extends React.Component {
    render() {
        let { data } = this.props;
        console.log(data)
        return (
            <BrandStyled>
                <div className="brandStyled">
                    <div className="brandStyled_bigImg">
                        <img src={data.head_info ? data.head_info.banner : ''} alt="" />
                        <div>
                            <img src="https://static.epetbar.com/static_wap/appmall/brand/gou.png" alt="" />
                            <span>品牌授权</span>
                            <img src="https://static.epetbar.com/static_wap/appmall/brand/arrow_header_new.jpg" alt="" />
                        </div>
                    </div>
                    <div className="brandStyled_introduce">
                        <div className="brandStyled_logo">
                            <img src={data.head_info ? data.head_info.brandlogo : ''} alt="" />
                            <p></p>
                        </div>
                        <div className="brandStyled_info">
                            <h2>{data.head_info ? data.head_info.brandname : ''}</h2>
                            <p>
                                <span>
                                    <img src="https://static.epetbar.com/static_wap/appmall/brand/icon3.png" alt="" />
                                    商品<i>{((data.head_info ? data.head_info.icontips[0].text : '>1').match(/>\d+/g)[0]).match(/\d+/g)}</i>款
                                </span>
                                <span>{data.head_info ? data.head_info.follownum : ''}</span>
                            </p>
                            <div>+关注</div>
                        </div>
                        <h6>{data.head_info ? data.head_info.description : ''}</h6>
                    </div>



                    <div className="brandStyled_titmoudle">
                        <h3>
                            热销
                            <img src="https://static.epetbar.com/static_wap/appmall/brand/arrow.png" alt="" />
                        </h3>
                    </div>
                    <div className="brandStyled_titmoudle_list">
                        <div>
                            {
                                (data.data ? data.data[1].value : []).map(item => {
                                    return (
                                        <div key={item.gid} onClick={this.handleBrand.bind(this,item)}>
                                            <img src={item.photo} alt="" />
                                            <p>{item.subject}</p>
                                            <h6>{item.sale_price}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>




                    <div className="brandStyled_titmoudle">
                        <h3>
                            新品
                            <img src="https://static.epetbar.com/static_wap/appmall/brand/arrow.png" alt="" />
                        </h3>
                    </div>
                    <div className="brandStyled_titmoudle_list">
                        <div>
                            {
                                (data.data ? data.data[3].value : []).map(item => {
                                    return (
                                        <div key={item.gid} onClick={this.handleBrand.bind(this,item)}>
                                            <img src={item.photo} alt="" />
                                            <p>{item.subject}</p>
                                            <h6>{item.sale_price}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>




                    <div className="brandStyled_scroll_nav">
                        <div>全部</div>
                        <div>天然无谷犬粮系列</div>
                        <div>天然低敏犬粮系列</div>
                        <div>无谷生鲜犬粮系列</div>
                    </div>




                    <div className="brandStyled_list_libox">
                        {
                            (data.data ? data.data[4].list : []).map(item => {
                                return (
                                    <div key={item.gid} onClick={this.handleBrand.bind(this,item)}>
                                        <img src={item.photo} alt="" />
                                        <div className="brandStyled_list_right">
                                            <h2>{item.subject}</h2>
                                            <h6><span><span>¥</span>{item.sale_price}</span>{item.dprice}</h6>
                                            <p>
                                                <span>{item.comments}</span>
                                                <span>{item.sold}</span>
                                            </p>
                                            <div>
                                                <img src="//static.epetbar.com/static_web/wap/src/images/addcart.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </BrandStyled>
        )
    }
    componentDidMount() {
        this.props.handleBrand(this.props.match.params.gid)
    }
    handleBrand(item){
        this.props.history.push("/details/"+item.gid+"/"+item.sale_price+"/"+item.market_price)

    }
}

export default Brand;