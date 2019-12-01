import styled from "styled-components";

export const ClassifyLeftStyled = styled.div`
height:100%;
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
        color: #000;
        box-sizing:border-box;
        text-align: center;
        line-height: 1.6;
    }
    .active{
        background: #f3f4f5;
        color: #41C856;
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
    .smallImg{
        height:86.656px;
    }
    .bigImg{
        height:45px;
    }
    .div{
        width:130px;
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
`







