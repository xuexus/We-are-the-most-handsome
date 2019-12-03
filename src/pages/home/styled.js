import styled, { keyframes } from "styled-components";


export const Home = styled.div`
     width:100%;
    height:100%;
    padding-bottom:52px;
    box-sizing:border-box;
    /* 头部的搜索框及分类 */    
    .home_first{
        width:100%;
        height:104px;
        position: absolute;
        top:0;
        z-index:10;
    }
    .home_first-one{
        height:30px;
        margin-top:25px;
        box-sizing: border-box;
        line-height: 1.6;
        display:flex;
        padding-left:15px;
        padding-right:15px;
    }
    .home_first-one_one{
        width:86%;
        height:30px;
        border-radius:20px;
        background:#f3f4f5 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbXo4A1AAAAKXRSTlMABPz3FQnh2ZPmfnQgsF4kEOvTzMWlZFkovrs0LxupoIhOSkZA7rlsaoBCP64AAAECSURBVCjPdZHXkgIhEEXJDJNzckyrG+7//+AWojLJ83KpOnQ3VJMnxyhRnKshjMkacWZ4wk4r/WXAT10sZdw1HPx37lqGMX73b4BgVscQkhkpR/SeVzjnuTLciSPASFaE0NQVctavpdTo3GuQkA0p6kcmaLdScgibGj3ZMuBqg0PuyMD9hoHuyBAXGwZiR15cZYX7jmyQuu7hjlSYbNygtkMnFNQmVeg28vxaTAuTr9yBscydaI1h2ZiWfqNHg59FbQYufJcC+uad7VXl/moJVH89JbRP7TChUfpaGhUA8A24BYoSOp4tKU0MA1RzIA9bQWVkQT471jAT+YQcoclnG0T/ZkYT5KqIvnAAAAAASUVORK5CYII=") no-repeat 14px;
        background-size:10px;
        margin-right: 15px;
        position: relative;
    }
    .home_first_one_one_one{
        position: absolute;
        top:0;
        left:30px;
        line-height:30px;
        color: #666;
        font-size:12px;
    }
    .home_first-one_two{
        >span{
        display: inline-block;
        width: 25px;
        height: 25px;
        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMAH7sEwArv/fr0kTMV497ZpCT35y0SD+vEb2kbyKxEP51/e0y0lWRaKI2MdD3PUzi9sK6JQiNRfQAAAe5JREFUSMfFlemWojAQhS9LwiI7goiAtu3WanfPct//2WbGUUZwIb+mvz/k3HNzUkWqKvgC4nL9LZAWpW8uyvGQe/QWsIPvjp7Ym4LkJJo2cQbkWlNGPsni9YF9bJJyPeofOSHNe6cYS5uTg8ANYjqh/WL0Zc+k5ea4i9hbLLyutgvoz/GQo88g7vzKlNUMT/AKplc7ZiF1gacInaHX5luxEhhAVNQv6yWDDIPMUk5xQkusORR4ZaKdFhEjFX9r1GxbG7K2ocQAXEZQZME3AClHUGTEiYFPBlAm5BxLrq+i1B1dAx4KLl9Qc4sWnaQJPBS2/IH36xQckjbwUBgzhGSmfkJGCRLqORi0YNOAMgZtpPSUvG1IIQdnTzfpFT9u9OnuFH+JPlvWeKHbl0s6Sy87SJ53dC9uzrAv5zVPfM/vlYZxr/ialZSr5n7xwaWrXt57ADvLyRUbyLbiv9d/UG3Rxen7QRNqQ8DRztfntKLSmEGiUk7infplqXKCMBl6bWzVoN+r6LdlXnM55J9fj/uxZc+e23PXovmvCVZ0n9v7T1bCdrPYFEXvh326kjQ7LePz51ETEONNnZDBnw2zOIeRxc00SkmavWd3Y/GCZW7Fb8VL2OLvb2v5uCj8hDKMynPyRh1I2jLQ15sd/j+/AMOpN25qtOyTAAAAAElFTkSuQmCC") no-repeat;
        background-size:100% 100%;
        }
    }
    .home_first_two{
        min-width: 320px;
        overflow-x: auto;
        overflow-y: hidden;
        padding-top: 5px;
        box-sizing: border-box;
    }
    .home_first_two_one{
        overflow:auto;

    }
    .home_first_two_one_one{
        white-space: nowrap;
        width:540px;
        height: 44px;
        line-height: 44px;
        display: block;
        box-sizing: border-box;
        overflow-x:hidden;
    }
    .home_first_two_one_one_one{
        float: left;
        font-size: 14px;
        width:75px;
        text-align: center;
        color:#fff;
    }

    /* 内容区 */
    .matter{
        overflow:auto;
        height:100%;
    }
    /* 首页的轮播 */
    .home{
        position: relative;
        height:290px;
        background:#d00;
        box-sizing: border-box;
    }
    .am-wingblank{
        margin:0 !important;
    }
    /* .home_section{
            height:290px;
            width:100%
    } */
    /* e宠列表 */
    .section{
        position: relative;
        z-index: 1;    
        max-width: 750px;
        min-width: 320px;
        margin: 0 auto;
        box-sizing: border-box;   
        margin-top:-10%;
    }
    .section_first{
        display: flex;
        overflow:hidden;
    }
    .section_first_one{
        width: 20%;
        height:115px;
        >img{
                width:100%;
                height:100%;
        }
    }
    /* 新人保障 */
    .nav{
        margin-bottom: 0px;
    }
    .nav_first{
        box-sizing: border-box;
        width:100%;
        >img:nth-of-type(1){
                height:68px;
        }
        >img:nth-of-type(2){
                height:85px;
        }
    }

    .aside{
        margin-bottom: 0px;
    }
    .aside_first{
        width: 46.4%;
        height:211.5px;
        float:left;
        >img{
                width:100%;
                height:211.5px;
        }
    }
    .aside_secend{
          width:53.6%;
          height:211.55px; 
          float:left;
          >img{
                  height:70.5px;
                  width:100%;
          } 
    }

    .nav_last{
        margin-bottom: 0px;
        width:100%;
        height:108px;
        clear: both;
        >img{
                width:100%;
                height:100%
        }
    }
    /* e宠拼团 */
    .mark{
        clear: both;
        margin-bottom: 20px;
       
    }
    .mark_first{
        box-shadow: 1px 2px 25px 0px rgba(0,0,0,0.1);
        border-radius: 15px;
        display: flex;
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;     
    }
    .mark_first_one{
        width:178px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-right: 1px dotted #f1f1f1;
    }
    .mark_first_one_one{
        margin-right: 5px;
        position: relative;
        width:162px;
        >img{
                width:60px;
                height:16px;
                margin-left:10px;
        }
    }
    /* .mark_first_one_one_one{
        background: #fb4752;
        border-radius: 20px;
        height: 13.5px;
        line-height: 12px;
        position: absolute;
        top: 1px;
        right: -7%;
        overflow: hidden!important;
        text-align: center;
    }
    .mark_first_one_one_one_one{
        padding: 0 2px;
        float: left;
        color: #fff;
        font-size: 12px;
        width:43px;
    } */
    /* .mark_first_one_one_one_two{
        border: 1px solid #fb4752;
        padding: 0 2px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-weight: 700;
        float: left;
        color: #333;
        background: #fff;
        width:54px;
    } */
    .mark_first_one_two{
        >.mark_first_one_two_one{
                display: flex;
                padding-right: 10px;
                margin-top: 15px;
                width: 100%;
                text-align: center;
                >.mark_first_one_two_one_one{
                        width: 50%;
                        float: left;
                        position: relative;
                        >img{
                                width:59px;
                                height:59px;
                                display:inline-block
                        }
                        >p:nth-of-type(1){
                                color: #ff5757;
                                font-size: 10px;
                                font-weight: 700;
                                >span{
                                        font-size:14px;
                                }
                        }
                        >p:nth-of-type(2){
                                font-size: 10px;
                                color: #999;
                        }
                
                }
        }    
    }
    /* 精选专区 */
    .meter{
        margin-bottom: 10px;
       
        box-sizing:border-box;
        display: flex;
        width: 100%;
        overflow: hidden;
        >img{
                width: 100%;
                display: block;
                border-bottom: 0px;
                height: 30px;
        }
    }
    .output{
        box-sizing: border-box;
        margin-bottom: 0px;
       
        display: flex;
    }
    .output_first{
        box-sizing: border-box;
        width:50%;
        >img{
                width: 100%;
                display: block;
                height: 131.5px;
        }
    }
    .output_second{
        width: 50%;
        box-sizing: border-box;
        margin-bottom:20px;  
        >img:nth-of-type(1){
                height: 131.5px;
                width: 100%;
                display: block;
        }  
        >img:nth-of-type(2){
                width: 100%;
                display: block;
                border-bottom: 0px;
                height: 132.5px;
        }
    }
    /* 大家都在买 */
    .moudle{
        margin-bottom: 10px;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        >img{
            width: 100%;
            display: block;
            border-bottom: 0px;
            height: 30px;
        }
    }
    .moudle_first{
        margin-bottom: 20px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        display: flex;
        position: relative;
        z-index: 1;
        transform: translate3d(0px, 0px, 0px);
        width: 375px;
        height: 230px;
        >img{
                width:100%;
                height:100%;
        }
    }
    /* 好物上心 */
    .audio{
        margin-bottom: 10px;
       box-sizing:border-box;
       display: flex;
       width: 100%;
       overflow: hidden;
       >img{
               width: 100%;
               display: block;
               border-bottom: 0px;
               height: 30px;
       }
    }
    /* 轮播 */
    .banner{
        margin-bottom: 20px;
        box-sizing: border-box;
        margin-right: 10px;
        margin-left: 10px;
    }
    .banner_first{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .banner_first_one{
        width: 100%;
        margin-right: 10px;
        height: 100%;
        position: relative;
        >img{
                height: 169.014px;
                border-radius: 15px;
                width: 100%;

        }
    }
    .banner_first_one_one{
        margin-top: 10px;
        display: flex;
        >img:nth-of-type(1){
                margin-right: 5px;
                float: left;
                border-radius: 15px;
                width: 50%;
        }
        >img:nth-of-type(2){
                border-radius: 15px;
                width: 50%;
                float: right;
                margin-left: 5px;
        }
    }
    /* 如果有家 */
    .details{
        margin-bottom: 10px;
       box-sizing:border-box;
       display: flex;
       width: 100%;
       overflow: hidden;
       >img{
               width: 100%;
               display: block;
               border-bottom: 0px;
               height: 30px;
       }
    }
    .figure{
        width: 355px;
        box-sizing: border-box;
        margin-bottom: 35px;
       
        margin-right: 10px;
        margin-left: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1; 
       
        >img{
                height: 169px;
                border-radius: 15px;
                width:100%
        }
    }
     /* {小萌书 */
     .book{
        margin-bottom: 10px;
       box-sizing:border-box;
       display: flex;
       width: 100%;
       overflow: hidden;
       >img{
               width: 100%;
               display: block;
               border-bottom: 0px;
               height: 30px;
       }
     }
     .comin{
        box-sizing: border-box;
        margin-bottom: 35px;
       
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        width: 355px;
        margin-right: 10px;
        /* height: 100%; */
        position: relative;
        margin-right: 10px;
        >img{
                height: 169px;
                border-radius: 15px;
                width:100%
        }
     }
     /* 潮品好物 */
    .product{
        margin-bottom: 10px;
       box-sizing:border-box;
       display: flex;
       width: 100%;
       overflow: hidden;
       >img{
               width: 100%;
               display: block;
               border-bottom: 0px;
               height: 30px;
       }
    }
    .video{
        box-sizing: border-box;
        margin-bottom: 35px;
       
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        width: 355px;
        margin-right: 10px;
        /* height: 100%; */
        position: relative;
        margin-right: 10px;
        >img{
                height: 169px;
                border-radius: 15px;
                width:100%
        }
    }
    /* 猜你喜欢 */
    .guess{
        margin-bottom: 10px;
       
        box-sizing: border-box;
        display: flex;
        padding-right: 10px;
        margin-left: 10px;
        >img{
            height: 19px;
        }
    }
    .shoop{
        width:100%;
        /* height:100%; */
        overflow:auto;
    }
    .shoop_first{
        margin-bottom: 10px;
       
        box-sizing: border-box;
    }
    .shoop_first_one{
        padding-right: 5px;
        padding-left: 5px;
    }
    .shoop_first_one_one{
        width: 46%;
        height:219px;
        float: left;
        padding: 0 5px;
        position: relative; 
        margin-bottom: 10px;  
    }
    .list{
        padding: 15px;
        border: 1px solid #f1f1f1;
        border-radius: 10px;
        >img{
            margin: 0 auto;
            width:100%;
        }
    }
    .list_first{
        height: 32px;
        font-size: 12px;
        line-height: 16px;
        overflow: hidden;
        color: #333;
    }
    .list_second{
        display:flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        >span{
            font-size: 10px;
            color: #ff5757;
            margin-top: 3px;
            font-weight: 700;
            >span{
                font-size: 14px
            }
        }
    }
    .car{
        width: 26px;
        height: 26px;
        position: absolute;
        bottom: 12px;
        right: 20px;
        z-index: 1;
        display:flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        >img{
            width: 26px;
            height: 26px;
        }
    }

    .tanchu{
        width:300px;
        height:133px;
        background:#0ff;
        position: absolute;
        margin-left:10%;
        top:40%;
        margin-right:5%;
        z-index:10;
        text-align:center;
        >p{
            padding: 27px 20px 17px;
            color: #353535;
            margin-bottom:22px;
        }
        >div{
            width:100%;
            height:48px;
            >span{
                display:inline-block;
                color: #353535;
                width:50%;
                border-top:1px solid #666;
                line-height: 48px;
                font-size: 18px;
                box-sizing:border-box;
            }
            >span:nth-of-type(1){
                border-right:1px solid #666;
            }
            >span:nth-of-type(2){
                color: #0BB20C;
            }
        }
    }
`
