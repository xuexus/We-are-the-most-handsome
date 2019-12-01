import React, { Component, Fragment } from 'react';
import { ClassifyLeftStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
@connect(mapStateToProps, mapDispatchToProps)

class ClassifyLeft extends Component {
    constructor() {
        super()
        this.state = {
            num: 88888,

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
                                data.map((item, index) => {
                                    return (
                                        <li key={item.cateid} className={num === item.cateid ? 'active' : ''} onClick={this.handleNavList.bind(this, item)}>{item.name}</li>
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
                                                            <div className={items.id_param?'':'div'} key={items.id_param || items.target.param}>
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
        this.props.handleClassifyLeft()
        this.props.handleClassifyLeftList(88888)
    }
    handleNavList(item) {
        this.setState({
            num: item.cateid
        })
        this.props.handleClassifyLeftList(item.cateid)
    }
}
export default ClassifyLeft;