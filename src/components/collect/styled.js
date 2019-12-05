import styled from "styled-components";

export const CollectStyled = styled.div`
 .SmallMBook_container{
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
        padding-bottom:52px;
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
    }                                 
    .SmallMBook_sollect{
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
    }

`