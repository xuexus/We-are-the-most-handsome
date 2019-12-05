import styled, { keyframes } from "styled-components";

export const Sixth = styled.div`
    width:100%;
    height:100%;
    background:#f3f4f5;
    
    .complete{
        width:100%;
        height:50px;
        background:#fff;
        position: absolute;
        top:0;
        left:0;
        right:0;
    }
    .brand{
        width:100%;
        height:100%;
        box-sizing: border-box;
        padding-top:50px;
    }
    .brand_first{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 4px;
        width: 10px;
        z-index: 1;
        text-align: center;
        box-sizing: border-box;
    }
    .brand_first_one{
        display: table;
        height: 100%;
    }
    .right{
        display: table-cell;
        height: 100%;
        vertical-align: middle; 
        box-sizing: border-box;
        >.span{
            display: block;
            height: 12px;
            margin-top: 2px;
            font-size: 12px;
            color:green;
            font-weight:800;
        }
        >.spane{
            display: block;
            height: 12px;
            margin-top: 2px;
            font-size: 12px;
        }
    }
    .brand_second{
        background: #f3f4f5;
        
        box-sizing: border-box;
        overflow:auto;
    }
    .brand_second_one{
        box-sizing: border-box;
        overflow:auto;
        height:100%;
        width:100%;
        >h2{
            text-indent: 15px;
            line-height: 24px;
            font-size: 12px;
            color: #999;
            font-weight: 400;
        }
    }
    .allbrand{
        background: #fff;
    }
    .allbrand_first{
        padding: 10px;
        border-bottom: 1px solid #f3f4f5;
        margin-right: 20px;
        box-sizing: border-box;
        overflow:hidden;
    }
    .allbrand_first_one{
        text-align: center;
        width: 30%;
        max-width: 150px;
        height: 50px;
        border: 1px solid #f3f4f5;
        position: relative;
        float: left;
        >img{
            max-width: 90%;
            height: 40px;
            margin: 5px auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display:block;
        }
    }
    .allbrand_first_two{
        margin: 5px 0 5px 20px;
        float: left;
        box-sizing: border-box;
        >p{
            font-size: 14px;
                color:#333;
        }
        >p:nth-of-type(2){
            color: #999;
        }
        
    }
`