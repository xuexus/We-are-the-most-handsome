import styled from "styled-components";

export const ClassifyStyled = styled.div`
    .classify{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        padding-bottom: .433rem;
    }
    .classify_header{
        width:100%;
        height:.333rem;
        box-sizing:border-box;
        padding:0 .125rem;
        display:flex;
        justify-content:center;
        border-bottom: 1px solid #cbcbcb;
        position:fixed;
        z-index:10;
        background:#fff;
        >p{
            color: #41C856;
            border-bottom: 2px solid #41C856;
            display: inline-block;
            line-height: .333rem;
            padding: 0 .033rem;
            margin: 0 .144rem;
            font-weight:900;
        }
    }
    .classify_header_search{
        position:absolute;
        right:.125rem;
        top:.108rem;
        width:.117rem;
        height:.117rem;
    }

    /* 分类 */
    .classify_content{
        box-sizing:border-box;
        width:100%;
        height:100%;
        padding-top:.333rem;
        background:#f3f4f5;
        position:relative;
    }
    .classify_content_nav{
        width:75px;
        border-right:.042rem solid #f3f4f5;
        height:100%;
        background:#fff;
        position:absolute;
        left:0;
        top:0;
        box-sizing:border-box;
        padding-top:.333rem;
        overflow-y:auto;
        ul>li{
            padding: 15px 0;
            border-bottom: 1px solid #f3f4f5;
            width: 70px;
            height: 50px;
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            /* background: #f3f4f5; */
            color: #41C856;
            box-sizing:border-box;
            text-align: center;
            line-height: 1.6;
        }
    }
    .classify_content_lists{
        width:100%;
        box-sizing:border-box;
        height:100%;
        padding-left:.625rem;
        background:#fff;
        margin-top:5px;
        overflow-y:auto;
    }
    .classify_content_list{
        width:100%;
        height:auto;
        overflow:hidden;
        border-top: 1px solid #f3f4f5;
        >p{
            font-size: 12px;
            color: #999;
            padding-left: 5px;
            margin-top: 10px;
            box-sizing: border-box;
            line-height: 1.6;
            font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
            img{
                height: 10px;
                margin-top: 5px;
                margin-right: 5px;
                float: right;
                box-sizing:border-box;
            }
        }
    }
    .classify_content_goods{
        padding:5px 5px 20px 5px;
        box-sizing:border-box;
        overflow:hidden;
        div{
            padding:0 5px;
            height:117px;
            margin-top:10px;
            text-align:center;
            float:left;
        }
        img{
            width:86.656px;
        }
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px;
            color: #333;
            font-size: 13px;
            margin-top: 10px;
            box-sizing: border-box;
        }
    }

    /* 品牌 */
    .classify_brand{
        box-sizing:border-box;
        width:100%;
        height:100%;
        padding-top:.333rem;
        background:#f3f4f5;
        position:relative;
        overflow-y:auto;
    }
    .classify_brands{
        border-top:5px solid #f3f4f5;
        border-bottom:5px solid #f3f4f5;
        background:#fff;
        >p{
            padding-top:20px;
            color: #999;
            font-size: 12px;
            text-align: center;
            line-height: 1.6;
        }
    }
    .classify_brands_lists{
        width:100%;
        overflow:hidden;
        padding:0 5px;
        box-sizing:border-box;
        height:auto;
    }
    .classify_brands_list{
        margin-top: 20px;
        width: 33.33%;
        padding: 0 5px;
        float: left;
        box-sizing: border-box;
        position: relative;
        p{
            height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 13px;
            margin-top: 5px;
            text-align: center;
            box-sizing: border-box;
            color: #333;
        }
        >p:nth-child(3){
            color:#999;
        }
    }
    .classify_brands_img{
        border: 1px solid #e2e2e2;
        text-align: center;
        padding: 50px 10px 10px;
        background: url("https://static.epetbar.com/static_web/wap/dist/images/background/default-epet2.jpg") no-repeat center center #fff;
        background-size: 120px auto;
        height: 50px;
        box-sizing: border-box;
        position: relative;
        img{
            max-width: 90%;
            margin: 10px auto 0;
            height: 40px;
            right: 0;
            top: 0;
            left:0;
            position: absolute;
            display: block;
            box-sizing: border-box;
            text-align: center;
        }
    }
    .classify_brand_all{
        width: 40px;
        height: 40px;
        right: 6px;
        bottom: 65px;
        position: fixed;
        z-index: 10;
        background: rgba(0,0,0,.4);
        line-height: 40px;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        text-align: center;
        box-sizing: border-box;
    }
`