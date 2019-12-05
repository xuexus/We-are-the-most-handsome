import React, { Component } from 'react'
import { Home } from './styled'
import { Link, withRouter } from "react-router-dom"
import { Carousel, WingBlank, } from 'antd-mobile';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStor"

// import Bscroll from "common/bscroll"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Homes extends Component {
    state = {
        data: [],
        imgHeight: 290,
        dataone: [],
        list: [],
        color: false,
        flag: false,
        storage: [],
    }
    render() {
        let { mes } = this.props;
        // console.log(mes)
        return (
            <Home>

                {/* 头部的搜索框及分类 */}
                <div className={this.state.color?"home_firste":"home_first"} >
                    <div className="home_first-one">
                        <div className="home_first-one_one" >
                            <p className="home_first_one_one_one" onClick={this.handleSousuo.bind(this)}>请输入搜索内容</p>
                        </div>
                        <p className="home_first-one_two">
                            <span className={this.state.color?"spans":"span"}></span>
                        </p>
                    </div>
                    <div className="home_first_two">
                        <div className="home_first_two_one">
                            <ul className="home_first_two_one_one">
                                {
                                    (mes.navs ? mes.navs.menus.data : []).map((item, index) => {
                                        return <li key={index} className={this.state.color?"home_first_two_one_one_ones":"home_first_two_one_one_one"}>
                                            {item.name}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="matter" onScroll={this.handleOnScroll.bind(this)} ref="xxs">
                    {/* 首页的轮播 */}
                    <div className="home">
                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite
                            >
                                {this.state.data.map(val => (
                                    <Link
                                        key={val}
                                        to=""
                                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={val}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </Link>
                                ))}
                            </Carousel>
                        </WingBlank>
                        {/* <img className="home_section" src="" alt="" /> */}

                    </div>
                    {/* e宠列表 */}
                    <div className="section">
                        <ul className="section_first">
                            {
                                (mes.list ? mes.list[0].data.menus : []).map((item, index) => {
                                    return <li key={index} className="section_first_one">
                                        <img src={item.img_url} />
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    {/* 新人保障 */}
                    <div className="nav">
                        <div className="nav_first">
                            <img src={mes.list ? mes.list[1].data.column_images[0][0].img_url : []} alt="" />
                            <img src={mes.list ? mes.list[1].data.column_images[0][1].img_url : []} alt="" />
                        </div>
                        <div className="aside">
                            <div className="aside_first">
                                <img src={mes.list ? mes.list[2].data.column_images[0][0].img_url : []} alt="" />
                            </div>
                            <div className="aside_secend">
                                {
                                    (mes.list ? mes.list[2].data.column_images[1] : []).map((item, index) => {
                                        return <img key={index} src={item.img_url} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="nav_last">
                            <img src={mes.list ? mes.list[3].data.column_images[0][0].img_url : []} alt="" />
                        </div>
                    </div>
                    {/* e宠拼团 */}
                    <div className="mark">
                        <div className="mark_first">
                            <div className="mark_first_one">
                                <div className="mark_first_one_one">
                                    <img src={mes.list ? mes.list[4].data.berserk.left.img_url : []} alt="" />
                                </div>
                                <div className="mark_first_one_two">
                                    <ul className="mark_first_one_two_one">
                                        {
                                            (mes.list ? mes.list[4].data.berserk.goods : []).map((item, index) => {
                                                return <li key={index} className="mark_first_one_two_one_one">
                                                    <img src={item.image.img_url} />
                                                    <p>￥ <span>{item.sale_price}</span></p>
                                                    <p>￥ <span>{item.little_price}</span></p>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="mark_first_one">
                                <div className="mark_first_one_one">
                                    <img src={mes.list ? mes.list[4].data.egroup.left.img_url : []} alt="" />
                                </div>
                                <div className="mark_first_one_two">
                                    <ul className="mark_first_one_two_one">
                                        {
                                            (mes.list ? mes.list[4].data.egroup.goods : []).map((item, index) => {
                                                return <li key={index} className="mark_first_one_two_one_one">
                                                    <img src={item.image.img_url} />
                                                    <p>￥ <span>{item.sale_price}</span></p>
                                                    <p>￥ <span>{item.little_price}</span></p>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* 大家都在买 */}
                    <div className="moudle">
                        <img src={mes.list ? mes.list[5].data.column_images[0][0].img_url : []} />
                    </div>
                    <div className="moudle_first">
                        <img src={mes.list ? mes.list[6].data.images[0].img_url : []} alt="" />
                    </div>
                    {/* 精选活动 */}
                    <div className="meter">
                        <img src={mes.list ? mes.list[8].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    <div className="output">
                        <div className="output_first">
                            {
                                (mes.list ? mes.list[9].data.column_images[0] : []).map((item, index) => {
                                    return <img src={item.img_url} key={index} />
                                })
                            }
                        </div>
                        <div className="output_second">
                            {
                                (mes.list ? mes.list[9].data.column_images[1] : []).map((item, index) => {
                                    return <img src={item.img_url} key={index} />
                                })
                            }
                        </div>
                        {/* <div className="output_second">
                            <img src="https://img2.epetbar.com/2019-11/12/18/f5993e04f9ef6217122888e482d841a6.jpg?x-oss-process=style/water" alt="" />
                            <img src="https://img2.epetbar.com/2019-11/12/18/4e12991db8d888427c57cb46393a3de6.jpg?x-oss-process=style/water" alt="" />
                        </div>
                        <div className="output_second">
                            <img src="https://img2.epetbar.com/2019-11/12/18/3dac62b03f5688b2c94a99cee9ef1e0e.jpg?x-oss-process=style/water" alt="" />
                            <img src="https://img2.epetbar.com/2019-11/12/18/5b49b59b62ed5c0c1c7c73a1c01dbd21.jpg?x-oss-process=style/water" alt="" />
                        </div> */}
                    </div>
                    {/* 好物上心 */}
                    <div className="audio">
                        <img src={mes.list ? mes.list[10].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    <div className="banner">
                        <div className="banner_first">
                            <div className="banner_first_one">
                                <img src={mes.list ? mes.list[11].data.column_images[0][0].img_url : []} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* 如果有家 */}
                    <div className="details">
                        <img src={mes.list ? mes.list[12].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    <div className="figure">
                        <img src={mes.list ? mes.list[13].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    {/*  小萌书 */}
                    <div className="book">
                        <img src={mes.list ? mes.list[14].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    <div className="comin">
                        <img src={mes.list ? mes.list[15].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    {/* 潮品好物 */}
                    <div className="product">
                        <img src={mes.list ? mes.list[16].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    <div className="video">
                        <img src={mes.list ? mes.list[17].data.column_images[0][0].img_url : []} alt="" />
                    </div>
                    {/* 猜你喜欢 */}
                    <div className="guess">
                        <img src={mes.list ? mes.list[18].data.left.img_url : []} alt="" />
                    </div>
                    <div className="shoop">
                        <div className="shoop_first">

                            {
                                this.state.list.map((item, index) => {
                                    return <ul key={index} className="shoop_first_one">
                                        {
                                            item.data.goods.map((items, indexs) => {
                                                return <li key={indexs} className="shoop_first_one_one">
                                                    <div className="list">
                                                        <img src={items.good_image.img_url} alt="" />
                                                        <div className="list_first">
                                                            {items.subject}
                                                        </div>
                                                        <div className="list_second">
                                                            <span>￥<span>{items.sale_price}</span></span>
                                                        </div>
                                                        <div className="car" onClick={this.props.handleMyCart.bind(this, items)}>
                                                            <img src="data:image/png;base64,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" alt="" />
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                })
                            }
                        </div>
                    </div>

                    <div className="tanchu" style={{ display: this.state.flag ? "block" : "none" }}>
                        <p>商品已成功加入购物车</p>
                        <div>
                            <span onClick={this.props.handleJiXu.bind(this)}>继续购物</span>
                            <span onClick={this.props.handleGo.bind(this)}>去购物车</span>
                        </div>
                    </div>

                </div>

            </Home>
        )
    }
    // 搜索
    handleSousuo(){
        this.props.history.push("./search")
    }
    componentDidMount() {
        this.props.handleHomeAsyncData();
    }
    componentWillReceiveProps(props) {
        this.handleImage(props.mes)
    }
    handleOnScroll() {
        let scrollTop =this.refs.xxs.scrollTop;
        if(scrollTop>0){
            this.setState({
                color:true
            })
        }else{
            this.setState({
                color:false
            }) 
        }
    }
    handleImage(mes) {
        if (mes.list) {
            this.state.dataone = mes.list.slice(12, 18)
            this.state.list = mes.list.slice(19)
        }
        if (mes.list[0].data.images) {
            mes.list[0].data.images.map((item) => {
                this.state.data.push(item.img_url)
            })
        }
    }
}
export default Homes;