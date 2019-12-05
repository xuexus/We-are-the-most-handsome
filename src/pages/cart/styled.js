import styled, { keyframes } from "styled-components";

export const Section = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    /* 内容区 */
    .mycart_section{
        box-sizing:border-box;
        width:100%;
        overflow:auto;
        padding-bottom:60px;
        padding-top:50px;
    }
    input{
        width:16px;
        height:16px;
        
    }
    .mycart_section_one{
        position: relative;
        z-index: 3;
        background: #fff;
        margin-top: 10px;
        background:#fff;
    }
    .warehouse{
        height: 45px;
        box-sizing: border-box;
        line-height: 20px;
        color: #333;
        >p{
            width: 100%;
            position: relative;
            background: #fff;
            padding: 10px;
            box-sizing:border-box;
            line-height: 20px;
            >input{
                float: left;
            }
            >span{
                background: none;
                color: #333;
                font-size: 15px;
                margin-right: 0;
                margin-left:5px;
                padding: 0px 5px 1px 0px;
                border-radius: 3px;
                display: inline-block;
            }
            >b{
                background: #fbeacf;
                border: 1px solid #fbeacf;
                color: #ecb44b;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                display: inline-block;
                font-size: 13px;
                font-weight: bold;
                text-align: center;
            }
        }
    }
    .checkbox{
        border-bottom: none;
        position: relative;
        box-sizing: border-box;
        color: #333;
        line-height: 20px;
        overflow:hidden;
      
    }
    .checkbox_first{
        transition: all 0.4s ease-in-out;
        z-index: 2;
        background: #fff;
        position: relative;
        padding-left: 10px;
        width:100%;
        float:left;
        overflow:hidden;
        >input{
            margin-top: 40px;
            float:left;
        }
        >.checkout_first{
            border-bottom: 1px solid #ebebeb;
            margin-left:25px;
            padding-top: 10px; 
            padding-bottom: 5px;
            box-sizing: border-box;
            position: relative;
            overflow:hidden;
            height:100%;
            >aside{   
                position: absolute;
                width: 85px;
                height: 85px;
                float:left;
                >img{
                    width: 85px;
                    height: 85px; 
                }
            }
            >div{
                margin-left: 95px;
                min-height: 85px;
                position: initial;
                top: 0;
                left: 95px;
                padding-right: 10px;
                box-sizing: border-box;
               >h1{
                font-weight: normal;
                height: 32px;
                overflow: hidden;
                font-size: 12px;
                line-height: 16px;
               }
               >hgroup{
                   margin-top: 10px;
                   color: #898989;
                   box-sizing: border-box;
                   >b{
                       color: #f05757;
                       margin-right: 0.3em;
                       font-weight: normal;
                       font-size:12px;
                       >span{
                           font-weight: bold;
                           color: #f05757;
                           font-size: 15px;
                       }
                   }
               }
               >nav{
                    width: 96px;
                    border: 1px solid #000;
                    margin-top: -20px;
                    background: #fff;
                    float:right;
                    margin-right:10px;
                    >button{
                        width:32px;
                        height:20px;
                        background:#fff;
                        border:none;
                        border-right:1px solid #000;
                    }
                    >button:nth-of-type(2){
                        border-left:1px solid #000;
                        border-right:none;
                    }
                    >input{
                        width:30px;
                        height:20px;
                        border:none;
                        text-align:center;
                    }

                }
            }
        }
    }


    /* 尾部 */
    .footer{
        width:100%;
        height:60px;
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        background:#fff;
        border-top: 1px solid #ebebeb;
        z-index:10;
    }
    .footer_first{
        width: auto;
        position: relative;
        float: left;
        box-sizing:border-box;
        margin-top: 10px;
        >input{
            margin-top: 10px;
            margin-left:10px;
            margin-right: 5px;
            float:left;
        }
        >label{
            outline: none;
            cursor: pointer;
            margin-left: 5px;
            display: table-cell;
            vertical-align: middle;
            height: 37px;
            float:left;
            line-height:36px;
            >span{
                color: #d00;
                font-size: 14px;
            }
            >span:nth-of-type(1){
                color: #666;
            }
            >span:nth-of-type(3){
                font-weight:800;
            }
        }
    }
    .footer_second{
        background: #bdbdbd;
        border-radius: 30px;
        width: 96px;
        height: 35px;
        line-height: 35px;
        float: right;
        text-align: center;
        margin-top: 13px;
        margin-right:10px;
        >span{
            color:#fff ;
            font-size:14px; 
        }
    }
    .goPrice{
        background:#41c856;
    }
`