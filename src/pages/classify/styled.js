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
            display: inline-block;
            line-height: .333rem;
            padding: 0 .033rem;
            margin: 0 .144rem;
            font-weight:900;
        }
        .active{
            color: #41C856;
            border-bottom: 2px solid #41C856;
        }
    }
    .classify_header_search{
        position:absolute;
        right:.125rem;
        top:.108rem;
        width:.117rem;
        height:.117rem;
    }

    

    
`