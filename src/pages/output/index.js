import React, { Component } from 'react'
import {Outplay} from "./styled"
import Header from '../../components/header'
import { withRouter } from "react-router-dom"
@withRouter
class Output extends Component {
    constructor(){
        super()
        this.state={
            name:"",
        }
    }
    render() {
        let {name}=this.state
        return (
            <Outplay>
                <Header title="账户管理"/>
                <div className="logout">
                    <ul>
                        <li>
                            <div>头像</div>
                            <img src="https://img2.epetbar.com/dogs/3.jpg@!water"/>
                        </li>
                        <li>
                            <div>昵称</div>
                            <span> epet_GirURx1kx9</span>
                        </li>
                        <li>
                            <div>用户名</div>
                            <span> {name}</span>
                        </li>
                        <li>
                            <div>性别</div>
                        </li>
                        <li>
                            <div>生日</div>
                        </li>
                        <li>
                            <div>首次养宠物</div>
                        </li>
                    </ul>  
                    <div className="goout" onClick={this.handleGo.bind(this)}>退出登录</div>  
                </div>
            </Outplay>
        )
    }
    componentDidMount(){
        this.handleName()
    }
    handleName(){
        this.setState({
            name:this.props.match.params.name
        },()=>{
            console.log(this.state.name)
        })
    }
    handleGo(){
        this.props.history.push("/main")
        localStorage.removeItem("Name")
    }
}

export default Output
