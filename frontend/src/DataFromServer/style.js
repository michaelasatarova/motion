import styled from "styled-components";

export const DataFetchPostsSectionStyled = styled.section`
width:43%;
background-color:#fff;
margin:10px;
padding:10px;

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
            margin-top:0px; 
        }
    }
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
    width: 43%;
    background-color: #fff;
    margin: 10px;
    padding: 10px;

img{
    width:50px;
    height:50px;
    border-radius:50px;
}

.bp-posts{
    width:100%;
    background-color: #fff;
    display: flex;
    justify-content:space-between;
    padding:20px;
    margin:20px;
    input, input:focus{
        width:500px;
        outline:none;
        border: none;
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
`
