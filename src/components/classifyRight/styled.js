import styled from "styled-components";

export const ClassifyRightStyled = styled.div`
height:100%;
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