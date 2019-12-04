import styled, { keyframes } from "styled-components";
export const Fiveth = styled.div`
     width:100%;
    height:100%;
    overflow:auto;
    background:#fff;
    .register{
        width:100%;
        height:50px; 
        background:#fff;
        position: fixed;
        top:0;
        left:0;
        right:0;
    }
    .register_first{
        width:100%;
        height:100%;
        padding-top:50px;
    }
    .register_first_one{
        padding: 10px 40px;
        position: relative;
        box-sizing: border-box;
        >p{
            color: #333;
            font-size: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
            font-weight: 700;
        }
    }
    .register_phone{
        position: relative;
        >input{
            width: 114%;
            border: 0;
            padding: 27px 0;
            border-bottom: 1px solid #d0d0d0;
            height: 34px;
            outline: 0;
            margin-left: -21px;
            margin-bottom: 6px;
            box-sizing: border-box;
        }
    }
    .zhuce{
        >i{
            font-style:normal;
            background: #f0f0f0;
            color: #bfbfbf;
            width: 100%;
            line-height: 50px;
            margin-top: 37px;
            display: block;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
        }
    }
    h2{
        font-weight:normal;
        color:#333;
        font-size: 12px;
        padding: 10px;
        text-align: center;
        >a{
            color:#d00;
        }
    }
`