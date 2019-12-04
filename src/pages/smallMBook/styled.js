import styled from "styled-components";

export const SmallMBookStyled = styled.div`
    .SmallMBook{
        padding-top: 50px;
        overflow:auto;
    }
    .SmallMBook_nav{
        width:92%;
        height:76px;
        margin:0 auto;
        background:#fff;
    }
    .SmallMBook_nav_search{
        overflow: hidden;
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        margin-top: 10px;
        box-sizing: border-box;
        color: #333;
        line-height: 1.6;
    }
    .SmallMBook_search_left{
        float: left;
        height:100%;
        img:nth-child(1){
            width: 13px;
            height: 16px;
            position: relative;
            bottom:2px;
        }
        span{
            font-size: 14px;
            line-height: 30px;
            display:inline-block;
            padding:0 5px;
        }
        img:nth-child(3){
            width: 6px;
            height: 4px;
        }
    }
    .SmallMBook_search_center{
        float:left;
        width: calc(100% - 82px);
        text-align: center;
        div{
            display: inline-block;
            width: calc(100% - 20px);
            height: 30px;
            background: rgba(240,240,240,1);
            opacity: 0.8;
            border-radius: 30px;
            line-height: 30px;
            padding: 0 15px;
            text-align: left;
            box-sizing: border-box;
            img{
                width: 14px;
                position: relative;
                bottom: 1px;
                line-height: 30px;
                text-align: left;
                box-sizing: border-box;
                vertical-align: middle;
            }
            span{
                font-size: 11px;
                font-weight: 300;
                margin-left: 6px;
                font-family: MicrosoftYaHeiLight;
                box-sizing: border-box;
                line-height: 30px;
                text-align: left;
                color: #666;
            }
        }
    }
    .SmallMBook_search_right{
        width: 24px;
        height: 22px;
        margin-top: 3px;
        float: right;
        box-sizing: border-box;
        color: #333;
        img{
            width: 100%;
    vertical-align: top;
        }
    }
    .SmallMBook_nav_froe{
        justify-content: space-around;
        font-weight: 400;
        font-size: 12px;
        overflow: hidden;
        line-height: 1.6;
        display: flex;
        box-sizing: border-box;
        color: #333;
        p{
            height: 36px;
            line-height: 30px;
            text-align: center;
            box-sizing: border-box;
            font-weight: 400;
            font-size: 12px;
            box-sizing:border-box;
        }
        .active{
            border-bottom:2px solid #41c856;
        }
    }


    /* .SmallMBook_container{
        width:100%;
        border-top:1px solid #f3f4f5;
        padding-bottom:52px;
    }
    .SmallMBook_container_five{
        height:97.5px;
        width:100%;
        display:flex;
        justify-content:space-around;
        img{
            width:75px;
            height:100%;
        }
    }
    .SmallMBook_container_list{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.6;
        >div{
            width: 92%;
            margin: 20px auto;
            background: rgba(255,255,255,1);
            box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
            border-radius: 10px;
            color: #333;
            box-sizing: border-box;
            line-height: 1.6;
            padding: 15px;
            overflow: hidden;
            >img{
                width: 125px;
                height: 62px;
                position: relative;
                float: left;
                border-radius: 5px;
            }
        }
    }
    .SmallMBook_list_p{
        height:68px;
        padding-left: 10px;
        width: calc(100% - 125px);
        box-sizing: border-box;
        line-height: 1.6;
        float:left;
        h3{
            font-size: 14px;
            font-weight: 500;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            box-sizing: border-box;
        }
        p{
            font-weight: 300;
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 8px;
            color: #999;
            box-sizing: border-box;
        }
    }
    .SmallMBook_list_bottom{
        float:left;
        margin-top: 4px;
        overflow: hidden;
        box-sizing: border-box;
        color: #333;
        line-height: 1.6;
        width:100%;
        font-family: Microsoft Yahei,-apple-system-font,Helvetica Neue,sans-serif;
    }
    .SmallMBook_list_fl{
        float: left;
        img{
            width: 23px;
            height: 23px;
            border-radius: 50%;
        }
        span{
            font-size: 12px;
            color: #333;
            padding-left:5px;
        }
    }
    .SmallMBook_list_fr{
        width: 53px;
        text-align: left;
        float: right;
        img{
            width: 16px;
            text-align: left;
        }
        span{
            color: #999;
            font-size: 12px;
            padding-left:5px;
        }
    } */


    /* 收藏 */
    /* .SmallMBook_sollect{
        border-top:1px solid #f3f4f5;
    }
    .SmallMBook_sollect_noLogin,.SmallMBook_sollect_yesLogin{
        text-align:center;
        div{
            background: url("https://wap.epet.com/app/img/bitmap404.5c8694aa.png") 0 0 no-repeat;
            background-size: 200px auto;
            height: 180px;
            width: 200px;
            background-position: 0 -812px;
            margin: 68px auto 0;
        }
        P:nth-child(2){
            color: #666;
            font-size: 15px;
            margin-top: 15px;
            line-height: 1.6;
        }
        p:nth-child(3){
            color: #B7B7B7;
            font-size: 12px;
            line-height: 1.6;
        }
        span{
            display:inline-block;
            width: 101px;
            height: 35px;
            border: 1px solid #41c856;
            line-height: 35px;
            color: #41c856;
            text-align: center;
            border-radius: 20px;
            margin: 15px auto;
        }
    } */




    /* 视频 */
    .SmallMBook_video{
        padding-bottom:52px;
    }
    .SmallMBook_video_list{
        background: #fff;
        box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 25px;
        width: 92%;
        margin:25px auto 0;

        >.SmallMBook_video_big{
            box-sizing: border-box;
            position: relative;
            >img{
                display:block;
                border-radius:5px 5px 0 0;
                width:100%;
                height:194px;
            }
            p{
                font-size: 15px;
                font-weight: 300;
                color: #fff;
                position: absolute;
                left: 15px;
                bottom: 9px;
            }
            h4{
                border-radius: 0px 60px 60px 66px;
                padding: 0 7.5px;
                opacity: 0.99;
                font-weight: 400;
                background: #f3f4f5;
                position: absolute;
                right: 10px;
                bottom: 12px;
                font-size: 9px;
                color: #999;
                font-weight:100;
                line-height: 1.6;
            }
        }
    }
    .SmallMBook_video_000{
        width:100%;
        height:100%;
        position:absolute;
        background:#000;
        top: 0;
        left:0;
        background: rgba(0,0,0,.4);
        border-radius:5px 5px 0 0;
    }
    .SmallMBook_video_small{
        background: #fff;
        padding: 15px 0 8px 15px;
        width:100%;
        box-sizing:border-box;
        >div{
            overflow-x:auto;
            width:auto;
            display:flex;
            position:relative;
            /* i{
                display:block;
                width:100%;
                height:5px;
                background:#fff;
                position:absolute;
                bottom:0;
                left:0;
                z-index:11;
            } */
            >div{
                margin-right:10px;
                width:110px;
                flex-shrink:0;
                height:103px;
                >div{
                    width:100%;
                    position:relative;
                    >img{
                        border-radius:3px;
                        width:100%;
                        height:63px;
                    }
                    h6{
                        display: inline-block;
                        padding: 0px 7.5px;
                        background: rgba(0,0,0,1);
                        opacity: 0.4;
                        border-radius: 14px;
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                        font-size: 9px;
                        color: #fff;
                        >img{
                            width: 6px;
                            height: 7px;
                            border-radius: 0;
                            position: relative;
                            bottom: 1px;
                        }
                        span{
                            font-size: 9px;
                            color: #fff;
                            line-height: 1.6;
                            padding-left:5px;
                        }
                    }
                }
            }
            >img{
                width:62.5px;
                height:62.5px;
                padding-right:50px;
            }
        }
        p{
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;font-size: 10px;
            margin-top: 6px;
            color: #333;
        }
    } 
`