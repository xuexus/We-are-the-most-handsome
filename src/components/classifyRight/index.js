import React, { Component } from 'react';
import { ClassifyRightStyled } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapState";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class ClassifyRight extends Component {
    render() {
        let { rightData } = this.props;
        return (
            <ClassifyRightStyled>
                <div className="classify_brand">
                    {
                        rightData.map((item) => {
                            return (
                                <div className="classify_brands" key={item.title}>
                                    <p>—— {item.title} ——</p>
                                    <div className="classify_brands_lists">
                                        {
                                            item.list.map((items) => {
                                                return (
                                                    <div className="classify_brands_list" key={items.brandid} onClick={this.handleRight.bind(this,items.brandid)}>
                                                        <div className="classify_brands_img">
                                                            <img src={items.logo} alt="" />
                                                        </div>
                                                        <p>{items.name}</p>
                                                        <p>{items.address}</p>
                                                    </div>
                                                )
                                            })
                                        }



                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="classify_brand_all">全部</div>
                </div>
            </ClassifyRightStyled>
        )
    }
    componentDidMount() {
        if(!localStorage.getItem("classifyRight")){
            this.props.handleClassifyRight()
        }
    }
    handleRight(gid){
        this.props.history.push("/brand/"+gid);
    }
}
export default ClassifyRight;