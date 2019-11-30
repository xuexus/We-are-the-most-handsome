import React, { Component } from "react";
import {TabBarStyled} from "./styled";
import {TabBarRoute} from "@/router";
import {withRouter} from "react-router-dom";
@withRouter
class TabBar extends Component{
    render(){
        let {path} = this.props;
        return (
            <TabBarStyled>
                <ul>
                    {
                       TabBarRoute.map((item)=>(
                           <li key={item.path} onClick={this.handlePath.bind(this,item.path)} className={path===item.path?'active':''}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                           </li>
                       )) 
                    }
                </ul>
            </TabBarStyled>
        )
    }
    handlePath(path){
        this.props.history.push(path)
    }
}

export default TabBar;