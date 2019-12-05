import React, { Component } from 'react'
import { Fiveth } from './styled'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStor"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            color:false
        }
       
    }
    render() {
        let { username, password, color } = this.state;
        return (
            <Fiveth>
                <div className="register"> </div>
                <div className="register_first">
                    <div className="register_first_one">
                        <p>快速注册</p>
                        <div className="register_phone">
                            <input type="text" placeholder="手机号码" value={username} onChange={this.props.handleRegister.bind(this)} />
                            <input type="text" placeholder="请输入6-20位密码" value={password} onChange={this.props.handleRegistere.bind(this)} />
                        </div>
                        <div className="zhuce">
                            <i className={color?"I":"i"}  onClick={this.props.handleChuan.bind(this)}>下一步</i>
                        </div>
                    </div>
                    <h2>点击“下一步”，即表示您阅读并同意
                        <a href="#">《E宠商城用户协议》</a>
                    </h2>
                </div>
            </Fiveth>
        )
    }
}
export default Register;