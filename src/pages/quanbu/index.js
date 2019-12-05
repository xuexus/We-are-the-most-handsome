import React from 'react'
import { Sixth } from './styled'
import Header from '../../components/header'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStor"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter


class Complete extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { data } = this.props
        return (
            <Sixth>
                <Header title="全部品牌 "/>
                <div className="brand" >
                    {/* 右侧列表栏 */}
                    <div className="brand_first">
                        <div className="brand_first_one">
                            <div className="right">
                                {
                                    (data ? data : []).map((item, index) => {
                                        return <span key={index}  onClick={this.handleTiao.bind(this,index)}>
                                            {item.order}
                                        </span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="brand_second" ref="biaoshi">
                        {/* A */}

                        {
                            (data ? data : []).map((item, index) => {
                                return <div className="brand_second_one" key={index}>
                                    <h2 className="english">{item.order}</h2>
                                    <div className="allbrand">
                                        {
                                            item.list.map((items, indexs) => {
                                                return <div className="allbrand_first" key={indexs}>
                                                    <div className="allbrand_first_one">
                                                        <img src={items.logo} alt="" />
                                                    </div>
                                                    <div className="allbrand_first_two">
                                                        <p>{items.name}</p>
                                                        <p>{items.address}</p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Sixth>
        )
    }
    componentDidMount() {
        this.props.handleQuanbuAsyncData();
    }
    handleTiao(index){
        let t=this.refs.biaoshi.querySelectorAll(".brand_second_one")[index].offsetTop
        window.scrollTo({
            left: 0,
            top: t,
            behavior: 'smooth',
        });
    }
}

export default Complete;