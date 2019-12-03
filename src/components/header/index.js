import React from 'react'
import {HeaderContainer} from "./styled"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom";

@withRouter
class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                    <div className="header_first" onClick={this.handleClick.bind(this)}>&lt;</div>
                    <div className="header_second">{this.props.title}</div>
                    <div className="header_thired"></div>
            </HeaderContainer>
        )
    }
    handleClick(){
        this.props.history.goBack();
    }
}


Header.defaultProps = {
    title:"小萌书"
}

Header.propTypes = {
    title:PropTypes.string
}
export default Header
