import styled, { keyframes } from "styled-components";

export const Fourth = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    background:#fff;
    .login{
        width:100%;
        height:50px; 
        background:#fff;
        position: fixed;
        top:0;
        left:0;
        right:0;
    }
    .login_first{
        width:100%;
        height:100%;
        padding-top:50px;
    }
    .login_first_one{
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
    .login_phone{
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
    .denglu{
        >.I{
            font-style:normal;
            background: #f0f0f0;
            color: #bfbfbf;
            width: 100%;
            line-height: 50px;
            margin-top: 37px;
            border-radius: 30px;
            display: block;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
        }
        >.i{
            font-style:normal;
            background: green;
            color: #fff;
            width: 100%;
            line-height: 50px;
            margin-top: 37px;
            border-radius: 30px;
            display: block;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
        }
    }
    .method{
        color: #333;
        font-weight:normal;
        font-size: 12px;
        margin-top: 15px;
        overflow: hidden!important;
        >a:nth-of-type(1){
            float: left;
            font-size: 12px;
        }
        >a:nth-of-type(2){
            float: right;
            font-size: 12px;
            cursor: pointer;
        }
    }
    .rest{
        margin-top: 100px;
        padding: 10px 40px;
        box-sizing: border-box;
        >img{
            width: 100%;
        }
    }
    .rest_first{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 100%;
        text-align: center;
        >img{
            width: 30px;
            height: 100%;
            margin: 0 auto;
        }
    }
    .approve{
        color: #333;
        margin-bottom: 15px;
        text-align: center;
        box-sizing: border-box;
        >span{
            font-size: 12px;
        }
        >a{
            color: #FF5757;
        }
    }
`