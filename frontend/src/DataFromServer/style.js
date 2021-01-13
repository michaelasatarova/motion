import styled from "styled-components";

export const DataFetchPostsSectionStyled = styled.section`
width:48%;
background-color:#fff;
margin:5px;
padding:5px;

.postHeader{
    display:flex;
    
    img{
    max-width:50px;
    height:50px;
    border-radius: 50px;
    margin:10px;
    }
    .created{
        margin-top:0px;
        h1{
            margin-top:10px; 
            margin-bottom:7px;
        }
        p{
            margin-top:5px;
        }
    }
}
.postContent{
    margin-left:20px;
}
@media (max-width: 1520px) {
        width:45%;
  }
  @media (max-width: 678px) {
        width:100%;
    
  }
`
export const LikeAndShareStyled = styled.section`

.like-and-share{
   display:flex; 
}
.like, .share, .count-of-likes{
    display:flex; 
    margin:10px;

    .i{
        margin-top:20px;
        margin-right: 10px;
    }
}

`
export const MichaelaPostStyled = styled.section`
    display: flex;
    width: 100%;
    width: 47%;
    background-color: #fff;
    margin: 10px;
    padding: 10px;

img{
    width:50px;
    height:50px;
    border-radius:50px;
}

.bp-posts{
    width:85%;
   // background-color: #fff;
    display: flex;
    justify-content:space-around;
    align-items:center;
    padding:20px;
    margin:20px;
    input, input:focus{
        width:300px;
        outline:none;
        border: none;
        margin-left:10px;
    }
    input::placeholder {
        font-size: 20px;
        margin-top:10px;
        }
    button{
        background:none;
        outline:none;
        border: none;
        cursor:pointer;
    }
}
@media (max-width: 1520px) {
        width:44%;
    
  }
  @media (max-width: 678px) {
        width:100%;
    
  }
`
