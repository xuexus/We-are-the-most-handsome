import styled from "styled-components"


export const SearchStyled = styled.div`
height:100%;
background:#f4f5f7;
.search{
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
padding-top:50px;
padding-bottom:52px;
overflow:auto;
}
.search_title{
width:100%;
height:50px;
position:fixed;
top:0;
left:0;
padding:7px 12px 7px 10px;
box-sizing:border-box;
display:flex;
justify-content:space-between;
align-items:center;
p{
font-size:30px;
}
input{
width:274px;
height:35px;
line-height: 35px;
background: #f6f6f6;
padding: 0 10px;
box-sizing:border-box;
border-radius: 5px;
font-size: 14px;
border:none;
outline:none;
}
span{
font-size: 16px;
}
img{
width:16px;
height:16px;
position:absolute;
right:75px;
top:17px;
}
}
.search_recommend{
width:100%;
height:30px;
box-sizing:border-box;
padding-left:15px;
background:#fbfbfd;
img{
width:20px;
height:20px;
padding-right:8px;
margin-top:-3px;
}
span{
color:#666;
font-size:14px;
line-height:30px;
display:inline-block;
}
}
.search_recommend_list{
width:100%;
box-sizing:border-box;
padding:0 12px 23px 12px;
background:#f4f5f7;
overflow:hidden;
>p{
line-height: 1.6;
font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
float: left;
background: #fff;
padding: 3px 10px;
margin: 10px 10px 0 0;
color: #999;
font-size: 12px;
border-radius: 15px; 
}
}
.search_recommend_lists{
>p{
font-size:12px;
line-height:40px;
width:100%;
box-sizing:border-box;
padding-left:12px;
background:#fff;
color:#333;
border-top:1px solid #ccc;
}
>p:nth-child(1){
border:none;
}
}
.search_history{
box-sizing: border-box;
text-align: center;
border-radius: 5px;
width: 60%;
margin: 40px auto 60px;
line-height: 40px;
font-size: 15px;
border: 1px solid #777;
}
`