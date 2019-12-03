import styled from "styled-components";

export const BrandStyled = styled.div`
    .brandStyled{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        padding-top:50px;
    }
    .brandStyled_bigImg{
        width:100%;
        height:250px;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        >div{
            width:82px;
            height:25px;
            position: absolute;
            right: 3px;
            background: rgba(255,255,255,.9);
            bottom: 3px;
            border-radius:3px;
            display:flex;
            justify-content:center;
            align-items:center;
            img:nth-child(1){
                width:15px;
                height:15px;
            }
            img:nth-child(3){
                width:9px;
                height:14px;
            }
        }
    }
    .brandStyled_introduce{
        width:100%;
        height:150px;
        position:relative;
        h6{
            padding: 20px 10px;
            font-size: 13px;
            line-height: 1.6;
            box-sizing: border-box;
            float: left;
            font-weight:100;
            max-height: 80px;
            overflow: hidden;
        }
    }
    .brandStyled_logo{
        width:90px;
        height:90px;
        border: 1px solid #ddd;
        position: relative;
        z-index: 1;
        margin: -30px 10px 0 10px;
        background:#fff;
        display:inline-block;
        img{
            width:100%;
            vertical-align:middle;
        }
        p{
            display:inline-block;
            height:100%;
            vertical-align:middle;
            width:0;
            overflow:hidden;
        }
    }
    .brandStyled_info{
        width:260px;
        height:60px;
        float:right;
        position:relative;
        box-sizing:border-box;
        padding-top:12px;
        h2{
            line-height: 1.6;
            font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
            font-size: 14px;
            color: #333;
            font-weight:100;
        }
        p{
            padding-top:3px;
            color: rgb(119, 119, 119);
            img{
                width:14px;
                height:14px;
                padding-right:3px;
                margin-top:-2px;
            }
            i{
                color: rgb(237, 64, 68);
                font-style:normal;
                padding:3px;
            }
            span:nth-child(2){
                float:right;
                padding-right:10px;
            }
        }
        >div{
            box-sizing: border-box;
            position: absolute;
            right: 10px;
            top: 10px;
            padding: 2px 6px;
            border-radius: 3px;
            color: #ed4044;
            border: 1px solid #ed4044;
        }
    }


    .brandStyled_titmoudle{
        width:100%;
        height:40px;
        border-bottom:1px solid #e7e7e7;
        h3{
            margin-left: 10px;
            font-size: 16px;
            line-height: 40px;
            font-weight:100;
        }
        img{
            height:40px;
            float:right;
        }
    }
    .brandStyled_titmoudle_list{
        width:100%;
        height:165px;
        padding:10px 0;
        overflow-x:auto;
        >div{
            width:auto;
            display:flex;
            >div{
                width:107px;
                height:100%;
                flex-shrink:0;
                text-align:center;
            }
            img{
                width:87px;
                height:87px;
            }
            p{
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                padding: 10px;
                width: 100%;
            }
            h6{
                color: #ed4044;
                padding-left: 10px;
                text-align:left;
                font-weight:100;
            }
        }
    }
    .brandStyled_scroll_nav{
        width:100%;
        height:43px;
        padding:10px 0;
        box-sizing:border-box;
        display:flex;
        justify-content:space-around;
        border-bottom:1px solid #e7e7e7;
        div{
            width:74px;
            height:19px;
            border:1px solid #f5f5f5;
            background:#f5f5f5;
            border-radius:3px;
            text-align:center;
            line-height:19px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        div:nth-child(1){
            border:1px solid #e35356;
            background:#fff;
        }
    }

    .brandStyled_list_libox{
        >div{
            padding: 10px;
            position: relative;
            box-sizing: border-box;
            font-size: 16px;
            line-height: 1.6;
            font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
            border-bottom:1px solid #e7e7e7;
            overflow:hidden;
            >img{
                width:100px;
                height:100px;
                float:left;
            }
        }
    }
    .brandStyled_list_right{
        width:245px;
        height:106px;
        margin-left:110px;
        h2{
            font-weight:100;
            font-size: 14px;
            line-height: 16px;
            padding-bottom:35px;
        }
        h6{
            font-weight:100;
            font-size: 12px;
            color: #666;
            line-height: 1.6;
            >span{ 
                font-size: 15px;
                color: #f03e3e;
                font-weight: 700;
                padding-right:5px;
                >span{
                    font-size: 12px;
                    font-weight:100;
                }
            }
        }
        p{
            color: #999;
            span:nth-child(1){
                padding-right:10px;
                font-size:12px;
            }
        }
        >div{
            width:25px;
            height:25px;
            position: absolute;
            bottom: 12px;
            right: 10px;
            width: 25px;
            z-index: 0;
            img{
                width:100%;
                height:100%;
            }
        }
    }
`