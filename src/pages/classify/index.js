import React, { Component } from 'react';
import {ClassifyStyled} from "./styled";

class Classify extends Component {
    constructor(){
        super()
        this.state={
            flag:true
        }
    }
    render() {
        let {flag} = this.state;
        return (
            <ClassifyStyled>
                <div className="classify">
                    <div className="classify_header">
                        <p className={flag?'active':''} onClick={this.handleFlag.bind(this,1)}>分类</p>
                        <p className={flag?'':'active'} onClick={this.handleFlag.bind(this,2)}>品牌</p>
                        <img src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png" className="classify_header_search" alt=""/>
                    </div>
                </div>
            </ClassifyStyled>
        )
    }
    handleFlag(index){
        if(index===1){
            this.setState({
                flag:true
            })
            this.props.history.push("/classify/classifyLeft")
        }else{
            this.setState({
                flag:false
            })
            this.props.history.push("/classify/classifyRight")
        }
    }
}
export default Classify;