import React, { Component } from 'react';
import { ClassifyRightStyled } from "./styled";
import {mapStateToProps,mapDispatchToProps} from "./mapState";
import {connect} from "react-redux";


@connect(mapStateToProps,mapDispatchToProps)
class ClassifyRight extends Component {
    render() {
        let {rightData} = this.props;
        console.log(rightData)
        return (
            <ClassifyRightStyled>
                <div className="classify_brand">
                    <div className="classify_brands">
                        <p>—— 推荐品牌 ——</p>
                        <div className="classify_brands_lists">
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                        </div>
                    </div>
                    <div className="classify_brands">
                        <p>—— 推荐品牌 ——</p>
                        <div className="classify_brands_lists">
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                        </div>
                    </div>
                    <div className="classify_brands">
                        <p>—— 推荐品牌 ——</p>
                        <div className="classify_brands_lists">
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                            <div className="classify_brands_list">
                                <div className="classify_brands_img">
                                    <img src="https://img2.epetbar.com/brand/brandLogo/upload_file_1562639814.jpg?x-oss-process=style/waterfall&$1=200" alt="" />
                                </div>
                                <p>伯纳天纯Pure&Natural</p>
                                <p>中国</p>
                            </div>
                        </div>
                    </div>
                    <div className="classify_brand_all">全部</div>
                </div>
            </ClassifyRightStyled>
        )
    }
    componentDidMount(){
        this.props.handleClassifyRight()
    }
}
export default ClassifyRight;