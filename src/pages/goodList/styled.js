import styled from "styled-components";

export const  GoodsListStyled = styled.div`
    .goodsList{
        
        padding-top:50px;
    }
    .goodsList_search{
        width:100%;
        height:60px;
        box-sizing:border-box;
        padding:10px 20px;
        div{
            width:100%;
            height:100%;
            background:#f6f6f6;
            border-radius: 5px;
        }
        >i{
            width: 20px;
            height: 20px;
            margin: 12px 0 0 15px;
            background: url("https://static.epetbar.com/static_wap/epetapp/pages/goods_list/images/brands-ico.png") no-repeat -52px -81px;
            background-size: 200px auto;
            float: left;
        }
        p{
            float:left;
            line-height:40px;
            padding-left:5px;
            font-size: 13px;
            color:#999;
        }
    }
    .goodsList_nav{
        width:100%;
        height:40px;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
        position:sticky;
        top:0;
        left:0;
        background:#fff;
        z-index:12;
        ul{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-around;
            li{
                width:100%;
                text-align:center;
                line-height:40px;
                position: relative;
                font-weight:600;
                font-size:14px;
                font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
            }
            .active{
                color: #41C856;
            }
        }
        i{
            width: 15px;   
            background: url("https://static.epetbar.com/static_wap/epetapp/pages/goods_list/images/brands-ico.png") no-repeat -164px -54px;
            height: 22px;
            top: 9px;
            transform: scale(0.5);
            position: absolute;
        }
        b{
            display: inline-block;
            background: url("https://static.epetbar.com/static_wap/epetapp/pages/goods_list/images/brands-ico.png") no-repeat -4px -14px;
            width: 15px;
            height: 14px;
            position: absolute;
            top: 15px;
            background-position: -43px -17px;
        }
        .vvv{
            font-weight:100;
            position: relative;
            top:-2px;
        }
    }
    .goodsList_content{
        width:100%;
        box-sizing:border-box;
    }
    .goodsList_content_list{
        position: relative;
        padding-right: 10px;
        background: #fff;
        padding-left: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
        box-sizing: border-box;
        font-size: 10px;
        line-height: 1.6;
        font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
        border-bottom: 1px solid #e7e7e7;
        overflow:hidden;
        >img{
            width:100px;
            height:100px;
            float:left;
        }
    }
    .goodsList_list_right{
        width:100%;
        height:100%;
        box-sizing:border-box;
        padding-left:100px;
        h2{
            font-weight: 400;
            height: 32px;
            overflow: hidden;
            font-size: 12px;
            line-height: 16px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        i{
            width:100%;
            height:25px;
            margin-top:5px;
            display:block;
        }
        h3{
            color: #FF5757;
            font-size: 14px;
            font-weight:100;
        }
        h4{
            color: #999;
            font-weight:100;
        }
        div{
            position: absolute;
            bottom: 10px;
            right: 10px;
            width: 30px;
            z-index: 0;
            box-sizing: border-box;
            img{
                width: 100%;
            }
        }
    }
`