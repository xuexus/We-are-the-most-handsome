import React, { Component, Fragment } from 'react';
import { ClassifyLeftStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ClassifyLeft extends Component {
    constructor() {
        super()
        this.state = {
            num: Number(localStorage.getItem("cateid")) || 88888,

        }
    }
    render() {
        let { data, list } = this.props;
        let { num } = this.state;
        return (
            <ClassifyLeftStyled>
                <div className="classify_content">
                    <div className="classify_content_nav">
                        <ul>
                            {
                                data.map((item) => {
                                    return (
                                        <li key={item.cateid} className={num === Number(item.cateid) ? 'active' : ''} onClick={this.handleNavList.bind(this, item)}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="classify_content_lists">
                        <div className="classify_content_list">
                            {
                                list.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <p>
                                                {item.title}
                                                <img src={item.rigth_img.image} alt="" />
                                            </p>
                                            <div className="classify_content_goods">
                                                {
                                                    item.list.map((items) => {
                                                        return (
                                                            <div className={items.id_param?'':'div'} key={items.id_param || items.target.param} onClick={this.handleToList.bind(this,items)}>
                                                                <img className={items.photo?'smallImg':'bigImg'} src={items.photo || items.logo} alt="" />
                                                                <p>{items.name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </ClassifyLeftStyled>
        )
    }
    componentDidMount() {
        if(!localStorage.getItem("classifyLeft")){
            this.props.handleClassifyLeft()
        }
        if(!localStorage.getItem("classifyLeftList")){
            this.props.handleClassifyLeftList(localStorage.getItem("cateid") || 88888)
        }
    }
    handleNavList(item) {
        this.setState({
            num: Number(item.cateid)
        })
        localStorage.setItem("cateid",item.cateid)
        this.props.handleClassifyLeftList(item.cateid)
    }
    handleToList(item){
        if(item.id_param){
            this.props.history.push("/goodList/"+(item.id_param.match(/\d+$/g)[0]))
        }else{
            this.props.history.push("/brand/"+item.target.param)
        }
    }
}
export default ClassifyLeft;