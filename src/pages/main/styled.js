import styled, { keyframes } from "styled-components";

export const Thirdiy = styled.div`
    width:100%;
    height:100%;
    background: #f3f4f5;
    overflow:auto;
    /* 内容 */
    .mine_sectoin{
        width:100%;
        padding-bottom:52px;
        overflow:auto;
    }
    .mine_sectoin_one{
        position: relative;
        box-sizing: border-box;
        background-image: url("https://static.epetbar.com/static_web/wap/src/images/background/backgroundV420.jpg");
        background-color: #f4f4f4;
        overflow:auto;
    }
    .data{
        padding-top: 15px;
        text-align: center;
        overflow:auto;
        >p{
            margin-left: 20px;
            float: left;
            >img{
                width: 50%;
            }
        }
        >b{
            font-weight:normal;
            float: right;
           
            >img{
                width: 50%;
            }
        }
    }
    /* 登陆前 */
    .logo{
        clear: both;
        margin: 30px 0;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        overflow:auto;
    }
    .logo_first{
        float: left;
        >img{
            width: 70px;
            height: 70px;
        }
    }
    .logo_second{
        margin-left: 80px;
        padding-top: 8px;;
        box-sizing: border-box;
        >p{
            margin-top: 15px;
            >span{
                color:#fff;
                font-size:16px;
                margin-right:5px;
            }
        }
    }
    /* 登陆后 */
    .logos{
        clear: both;
        margin: 30px 0;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        overflow:auto;
    }
    .logo_firsts{
        float: left;
       
        >img{
            width: 70px;
            height: 70px;
            border-radius:50%;
        }
    }
    .logo_seconds{
        margin-left: 80px;
        padding-top: 8px;;
        box-sizing: border-box;
        >p{
            margin-top: 15px;
            color:#fff;
            font-size:16px;
            >span{
                color:#fff;
                font-size:16px;
                margin-right:5px;
            }
        }
    }
    .bool{
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        overflow:auto;
        
    }
    .bool_first{
        background: #252525;
        border-radius: 15px 15px 0px 0px;
        padding-bottom: 5px;
        padding-right: 20px;
        padding-top: 5px;
        height:35px;
        overflow:auto;
        >li{
            float: left;
            width:18%;
            margin-left: 22px;
            position: relative;
            font-size:10px;
            padding-top:5px;
            >img{
                width:63px;
                height:15px;
            }
        }
    }
    .mine_section_three{
        margin-bottom:40px;
    }
    /* 我的订单 */
    .mine_sectoin_two{
        margin-bottom: 25px;
        box-sizing: border-box;
        margin-top: 30px;
        padding-right: 6px;
        padding-left: 7px;
        box-shadow: 1px 2px 25px 0px rgba(0,0,0,0.1);
        border-radius: 15px;
        background:#fff;
    }
    .order{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        box-sizing: border-box;
        >img{
            height: 16px;
        }
    }
    .order_plues{
        clear: both;
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
        padding-bottom: 10px;
        margin-top: 20px;
        box-sizing: border-box;
        overflow:auto;
        >li{
            float: left;
            width: 15%;
            padding: 0 8px;
            >div{
                display:flex;
                justify-content:center;
                >img{
                   
                    width: 45%;
                }
                >span{
                    color:#d00;
                    font-size:14px;
                    font-weight:800;
                }
            }
            >p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                margin-top: 5px;
                text-align: center;
            }
        }
        >.li{
            float: left;
            width: 25%;
            padding-bottom:10px;
            padding-top:10px;   
            >div{
                display:flex;
                justify-content:center;
                >img{
                    width: 30%;
                }
                >span{
                    color:#d00;
                    font-size:14px;
                    font-weight:800;
                }
            }
            >p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                margin-top: 5px;
                text-align: center;
            }
        }
    }
`