import styled from "styled-components"


export const Outplay = styled.div`
    width:100%;
    height:100%;
    background:#f3f4f5;
    .logout{
        height:100%;
        width:100%;
        box-sizing: border-box;
        padding-top:50px;
        >ul{
            margin-bottom: 1em;
            background: #fff;
            >li{
                border-bottom: 1px solid #f3f4f5;
                position: relative;
                margin-left: 10px;
                padding-bottom: 10px;
                padding-top: 10px;
                box-sizing: border-box;
                >div{
                    font-size: 15px;  
                    padding-right: 10px;
                    padding-bottom: 10px;
                }
                >img{
                    right: 10px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    top: 5px;
                    position: absolute;
                }
                >span{
                    position: absolute;
                    top: 7px;
                    right: 20px;
                    color: #999;
                    font-size:14px;
                }
            }
        }
    }
    .goout{
        border-radius: 30px;
        margin: 10px 10px 0;
        background: #d9534f;
        border: #e3524d solid 1px;
        color: #fff;
        font-size: 13px;
        padding-bottom: 5px;
        padding-top: 5px;
        text-align: center;
    }
`