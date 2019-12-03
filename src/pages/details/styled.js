import styled from "styled-components"

export const DetailsStyled = styled.div`
    .details{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        padding-top:50px;
        line-height: 1.6;
        box-sizing: border-box;
        >div{
            padding-bottom:52px;
        }
    }
    .details_swiper{
        width:100%;
        height:375px;
        overflow:hidden;
        position: relative;
        img{
            width:100%;
            height:100%;
        }
    }
    .details_swiper_lb{
        position: absolute;
        width: 30px !important;
        height: 30px !important;
        z-index: 999;
        left: auto !important;
        right: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 100%;
        color: #fff;
        line-height: 30px;bottom: 10px;
        text-align: center;
        transition: .3s;
        transform: translate3d(0,0,0);
        box-sizing: border-box;
        span{
            color: #fff;
            line-height: 30px;
        }
    }
    .details_title{
        background: #fff;
        padding-bottom: 10px;
        padding-top:5px;
        box-sizing: border-box;
        font-size: 10px;
        line-height: 1.6;
        border-bottom:20px solid #f5f6f8;
        font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
        p:nth-child(1){
            font-size: 13px;
            color: #333333;
            padding: 0 10px;
        }
        p:nth-child(2){
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;    
            font-size: 12px;
            color: #e75656;
            padding: 0 10px;
            width: 100%;
            box-sizing: border-box;
        }
    }
    .details_title_prise{
        background: #fff;
        margin-top: 10px;
        margin-left: 10px;
        border-top: #e5e5e5 solid 1px;
        box-sizing: border-box;
        >span:nth-child(1){
            display: inline-block;
            width: 50%;
            >span:nth-child(1){
                font-size: 12px;
                color: #ea5858;
            }
            >span:nth-child(2){
                font-size: 20px;
                color: #ea5858;
                margin-right: 10px;
            }
            >span:nth-child(3){
                font-size: 12px;
                color: #333;
                text-decoration: line-through;
            }
            >span:nth-child(4){
                font-size: 12px;
                color: #333;
                text-decoration: line-through;
            }
        }
        >span:nth-child(2){
            text-align: right;
            padding-right: 10px;display: inline-block;
            width: 50%;
            font-size: 10px;
            box-sizing:border-box;
            img{
                height: 25px;
            }
        }
    }
    .details_combo{
        width:100%;
        height:50px;
        padding:10px 0 10px 10px;
        box-sizing:border-box;
        border-bottom:10px solid #f5f6f8;
        line-height:20px;
        background:#fff;
        >span:nth-child(1){
            font-size: 13px;
            color: #333;
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            width: 30%;
        }
        >span:nth-child(2){
            box-sizing: border-box;
            text-align: right;
            padding-right: 10px;
            font-size: 12px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            width: 60%;
            float:right;
            span{
                padding-left:20px;
            }
        }
    }
    .details_backging{
        background:#fff;
        border-bottom:10px solid #f5f6f8;
    }
    .details_backging_top{
        line-height: 1.6;
        font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
        box-sizing: border-box;
        margin-left: 10px;
        font-size: 13px;
        position: relative;
        color: #666;
        padding: 10px 0;
        span:nth-child(2){
            color: #ea5858;
        }
    }
    .details_backging_bottom{
        border-top:1px solid #f5f6f8;
        padding: 10px;
        font-size: 13px;
        color: #666;
        position: relative;
        >span{
            font-size: 12px;
            display: inline-block;
            color: #999;
            vertical-align: top;
            width: 15%;
        }
        div{
            font-size: 14px;
            display: inline-block;
            color: #333;
            width: 85%;
            span{
                display:inline-block;
                width:84px;
                text-align:center;
                line-height:24px;
                border: 1px solid #e7e7e7;
                margin-right:5px;
                border-radius:4px;
            }
            span:nth-child(1){
                background-color: #f03e3e !important;
                color: #fff !important;
            }
        }
    }
    .details_buynum{
        background:#fff;
        padding:10px;
        height:32px;
        line-height:32px;
        overflow:hidden;
        border-bottom:10px solid #f5f6f8;
        span:nth-child(2),span:nth-child(4){
            display:inline-block;
            width: 26px;
            height: 26px;
            border:1px solid #ccc;
            text-align:center;
            line-height:26px;
        }
        input{
            width:48px;
            border:none;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
            height:24px;
            margin-top:2px;
            text-align:center;
        }
        span:nth-child(2){
            margin-left:10px;
            border-radius:3px 0 0 3px;
        }
        span:nth-child(4){
            border-radius:0 3px 3px 0;
        }
    }
    .details_site{
        background:#fff;
        width:100%;
        height:43px;
        box-sizing:border-box;
        padding:10px;
        border-bottom:1px solid #f5f6f8;
        img{
            width:15px;
            height:15px;
            padding:0 3px; 
        }
        p{
            float:right;
            color:#999;
            span{
                border:1px solid #e7e7e7;
                padding:3px;
                margin-right:5px;
                border-radius:3px;
            }
        }
    }
    .details_three{
        background:#fff;
        width:100%;
        height:40px;
        display:flex;
        justify-content:space-around;
        border-bottom:10px solid #f5f6f8;
        div{
            width:100%;
            height:100%;
            box-sizing:border-box;
            padding:10px;
            text-align:center;
            img{
                width:20px;
                height:20px;
                padding-right:5px;
            }
        }
    }

    .details_evaluate{
        background:#fff;
    }
    .details_evaluate_title{
        width:100%;
        height:43px;
        box-sizing:border-box;
        padding:10px;
        border-bottom:1px solid #f5f6f8;
        color:#999;
        img{
            width:15px;
            height:15px;
        }
        >span{
            padding:0 3px;
        }
        >span:nth-child(2){
            color:#000;
            font-size:14px;
        }
        p{
            float:right;
            span{
                padding-right:5px;
            }
        }
    }
    .details_evaluate_list{

        li{
            width:100%;
            height:104px;
            box-sizing:border-box;
            padding:10px;
            border-bottom:1px solid #f5f6f8;
            >img{
                width:42px;
                height:42px;
                border-radius:50%;
                float:left;
            }
            div:nth-child(2){
                width:172px;
                float:left;
                color: #333;
                padding-left:10px;
                p{
                    color: #999;
                }
                div{
                    margin: 10px 0 0 0;
    height: 44px;
    overflow: hidden;
                }
            }
            h5{
                width:120px;
                float:right;
                img{
                    float:right;
                }
                img:nth-child(2){
                    clear: both;
                    width:15px;
                    height:15px;
                    padding-right:5px;
                    padding-top:5px;
                }
            }
        }
    }
    .details_evaluate_btn{
        padding: 5px 15px 15px 15px;
        box-sizing: border-box;
        background: #fff;
        font-size: 10px;
        p{
            display: inline-block;
            width: 48%;
            height: 35px;
            line-height: 35px;
            border: 1px solid #ed4044;
            border-radius: 5px;
            color: #ed4044;
            font-size: 12px;
            margin-top: 10px;
            text-align: center;
        }
        p:nth-child(2){
            float:right;
        }
    }
    .am-wingblank-lg{
        margin:0 !important;
    }
    .slider-decorator-0{
        bottom:10px !important;
    }
    .details_goCart{
        width:100%;
        height:52px;
        position:fixed;
        bottom:0;
        left:0;
        background:#f5f6f8;
    }
    .details_goCart_left{
        width:25%;
        height:100%;
        float: left;
        text-align:center;
        i{
            line-height: 20px;
            display: inline-block;
            vertical-align: middle;
            background-size: 100% auto;
            font-style: normal;
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            text-align: center;
            span{
                background:url("https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/s1.png");
                display: block;
                line-height: 1;
                margin: 5px auto 4px;
                width: 20px;
                height: 19px;
                background-position: 0 -20px;
                background-size: 100%;
            }
        }
        p{   
            color: #999;
            line-height: 20px;
        }
    }
    .details_goCart_center{
        width:25%;
        height:100%;
        float: left;
        text-align:center;
        i{
            line-height: 20px;
            display: inline-block;
            vertical-align: middle;
            background-size: 100% auto;
            font-style: normal;
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            text-align: center;
            span{
                background:url("https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/car.png");
                display: block;
                line-height: 1;
                margin: 5px auto 4px;
                width: 20px;
                height: 19px;
                background-position: 0 -20px;
                background-size: 100%;
            }
        }
        p{   
            color: #999;
            line-height: 20px;
        }
    }
    .details_goCart_right{
        width:50%;
        height:100%;
        float: left;
        background-color: #f03e3e;
        text-align:center;
        line-height:52px;
        color:#fff;
    }
`