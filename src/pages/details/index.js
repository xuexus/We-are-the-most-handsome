import React from "react"
import { DetailsStyled } from "./styled"
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            czdp: {},
            dpgm: {},
            jxpj: {},
            data: [],
            imgHeight: 176,
            slideIndex: 0,
            indexD: 1
        }
    }
    render() {
        let { czdp, dpgm, jxpj, indexD, data } = this.state;
        let { deta } = this.props;
        return (
            <DetailsStyled>
                <div className="details">
                    <div>
                        <div className="details_swiper">

                            <WingBlank>

                                <WhiteSpace />
                                <Carousel
                                    autoplay={false}
                                    infinite
                                    selectedIndex={this.state.slideIndex}
                                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                    afterChange={(index) => { this.setState({ indexD: index + 1 }) }}
                                >
                                    {this.state.data.map((val, index) => (
                                        <a
                                            key={val + index}
                                            href="http://www.alipay.com"
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={val.image}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </WingBlank>



                            <div className="details_swiper_lb">
                                <span>{indexD}</span>/<span>{data.length}</span>
                            </div>
                        </div>

                        <div className="details_title">
                            <p>{deta[0] ? deta[1].subject : ''}</p>
                            <p>{deta[0] ? deta[1].presubject : ''}</p>
                            <div className="details_title_prise">
                                <span>
                                    <span>￥</span>
                                    <span>{this.props.match.params.sale_price}</span>
                                    <span>￥</span>
                                    <span>{this.props.match.params.market_price}</span>
                                </span>
                                <span>
                                    <img src={deta[0] ? deta[1].price_right.img : ''} alt="" />
                                </span>
                            </div>
                        </div>

                        {
                            czdp.left_text ? (
                                <div className="details_combo">
                                    <span>{czdp.left_text ? czdp.left_text : ''}</span>
                                    <span>{czdp.right_text ? czdp.right_text : ''}<span>></span></span>
                                </div>
                            ) : ''
                        }

                        <div className="details_backging">
                            <div className="details_backging_top">
                                <span>{dpgm.left_text ? dpgm.left_text : ''}</span>
                                <span>{dpgm.def_format ? dpgm.def_format : ''}</span>
                            </div>
                            <div className="details_backging_bottom">
                                <span>{dpgm.formats ? dpgm.formats[0].name : ''}</span>
                                <div>
                                    {
                                        (dpgm.formats ? dpgm.formats[0].option : []).map((item) => {
                                            return (
                                                <span key={item.name}>{item.name}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="details_buynum">
                            <span>购买数量</span>
                            <span>-</span>
                            <input type="text" placeholder="1" />
                            <span>+</span>
                        </div>

                        <div className="details_site">
                            <span>送至</span>
                            <img src="//static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/dress.png" alt="" />
                            <span>重庆 渝中区</span>
                            <p>
                                <span>E宠西部中央仓</span>>
                            </p>
                        </div>

                        <div className="details_three">
                            <div>
                                <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt="" />
                                正品保证
                        </div>
                            <div>
                                <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt="" />
                                99元包邮
                        </div>
                            <div>
                                <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt="" />
                                30天退货
                        </div>
                        </div>

                        <div className="details_evaluate">
                            <div className="details_evaluate_title">
                                <img src="//static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/pl.png" alt="" />
                                <span>{jxpj.left_text ? jxpj.left_text : ''}</span>
                                <span>{jxpj.value ? jxpj.value : ''}</span>
                                <p>
                                    <span>{jxpj.right_text ? jxpj.right_text : ''}</span>>
                                </p>
                            </div>

                            <ul className="details_evaluate_list">
                                {
                                    (jxpj.list ? jxpj.list : []).map((item) => {
                                        return (
                                            <li key={item.rid}>
                                                <img src={item.avatar} alt="" />
                                                <div>
                                                    <span>{item.disname}</span>
                                                    <p>{item.join_time}</p>
                                                    <div>{item.content}</div>
                                                </div>
                                                <h5>
                                                    <img src={item.starurl} alt="" />
                                                    <img src={item.group_icon} alt="" />
                                                </h5>
                                            </li>
                                        )
                                    })
                                }



                                <div className="details_evaluate_btn">
                                    <p>查看全部评价</p>
                                    <p>查看购买咨询</p>
                                </div>
                            </ul>
                        </div>

                        <div className="details_goCart">
                            <div className="details_goCart_left">
                                <i>
                                    <span></span>
                                </i>
                                <p>收藏</p>
                            </div>
                            <div className="details_goCart_center">
                                <i>
                                    <span></span>
                                </i>
                                <p>购物车</p>
                            </div>
                            <div className="details_goCart_right">加入购物车</div>
                        </div>
                        
                    </div>
                </div>
            </DetailsStyled>
        )
    }
    componentDidMount() {
        this.props.handleDetails(this.props.match.params.gid)


    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        newProps.deta.map(item => {
            if (item.type === 4) {
                this.setState({
                    czdp: item
                })
            }
            if (item.type === 102 || item.type === 5) {
                this.setState({
                    dpgm: item
                })
            }
            if (item.type === 8) {
                this.setState({
                    jxpj: item
                })
            }
            if (item.type === 20) {
                this.setState({
                    data: item.photos
                })
            }
        });
    }


}

export default Details;