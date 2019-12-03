import styled from "styled-components";

export const VideoStyled = styled.div`
 .SmallMBook_video{
        padding-bottom:52px;
        border-top:1px solid #f3f4f5;
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