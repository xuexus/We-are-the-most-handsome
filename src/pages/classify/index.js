import React, { Component } from 'react';
import {ClassifyStyled} from "./styled";

class Classify extends Component {
    render() {
        return (
            <ClassifyStyled>
                <div className="classify">
                    <div className="classify_header">
                        <p className={this.props.location.pathname==="/classify/classifyLeft"?'active':''} onClick={this.handleFlag.bind(this,1)}>分类</p>
                        <p className={this.props.location.pathname==="/classify/classifyLeft"?'':'active'} onClick={this.handleFlag.bind(this,2)}>品牌</p>
                        <img src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png" className="classify_header_search" onClick={this.handleSearch.bind(this)} alt=""/>
                    </div>
                </div>
            </ClassifyStyled>
        )
    }
    handleFlag(index){
        if(index===1){
            this.props.history.push("/classify/classifyLeft")
        }else{
            this.props.history.push("/classify/classifyRight")
        }
    }
    handleSearch(){
        this.props.history.push("/search")
    }
}
export default Classify;