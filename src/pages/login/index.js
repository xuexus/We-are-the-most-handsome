import React, { Component } from 'react'
import { Fourth } from './styled'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStor"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Login extends Component {
    constructor(){
        super()
        this.state={
            valone:"",
            valtwo:"",
            color:false
        }
    }
    render() {
        let {valone,valtwo,color}=this.state
        return (
            <Fourth>
                <div className="login"> </div>
                <div className="login_first">
                    <div className="login_first_one">
                        <p>证号密码登录</p>
                        <div className="login_phone">
                            <input type="text" placeholder="用户名/手机号/邮箱号" value={valone} onChange={this.props.handleValone.bind(this)}/>
                            <input type="text" placeholder="请输入密码" value={valtwo} onChange={this.props.handleValtwo.bind(this)}/>
                        </div>
                        <div className="denglu">
                            <i onClick={this.props.handleYanzheng.bind(this)} className={color?"i":"I"}>登录</i>
                        </div>
                        <h2 className="method">
                            <a href="#">短信验证码登录</a>
                            <a href="#">新用户注册</a>
                        </h2>
                    </div>
                    <div className="rest">
                        <img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother.png" alt=""/>
                        <div className="rest_first">
                            <img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" alt=""/>
                            <img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" alt=""/>
                        </div>
                    </div>
                    <p className="approve">
                        <span>登录代表您阅读并同意</span>
                        <a href="#">《E宠商城用户协议》</a>
                    </p>
                </div>
            </Fourth>
        )
    }
}
export default Login;