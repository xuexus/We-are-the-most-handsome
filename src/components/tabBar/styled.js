import styled from "styled-components";

export const TabBarStyled = styled.div`
    width:100%;
    height:52px;
    background:#fff;
    border-top:1px solid #ccc;
    position:fixed;
    left:0;
    bottom:0;
    z-index:10;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .active{
            color:#41c856;
        }
    }
    li{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:#999999;
        i{
            font-size:20px;
        }
        span{
            font-size:15px;
        }
    }

`