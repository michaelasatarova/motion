import styled from "styled-components";


export const PostStyled = styled.section`

.blog-post-header{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10%;
}   
.bp-h-left, .bp-h-left, .bp-h-left-con, .bp-h-right, .bp-h-right-con{
    display: flex;
    flex-direction: row; 
    align-items: baseline;
}
.bp-h-left, .bp-h-left, .bp-h-left-con, .bp-h-right, .bp-h-right-con{
    display: flex;
    flex-direction: row; 
    align-items: baseline;
}
.bp-h-left{
    width: 50%;
    justify-content: space-around;
    }

a{    
    text-decoration:none;      
    padding: 14px 0;
    &:hover, &:focus, &:active{
    border-bottom: 2px solid blueviolet;
    }
} 

img, .i{
    margin-right: 5px;
    color:#767272;
}
.bp-h-right a img{
    width:50px;
    height:50px;
    border-radius:50px;
}
.Logo{
    width: 26px;
    height: 26px;
    position: relative;
    top: 5px;       
}
h2{
    font-size: 22px;
    font-weight: 400;
}
h3{
    font-weight: 400;
}
            
                          
    
    .bp-h-right{
        width: 50%;
        justify-content: flex-end;
        align-items: center;
    }
        
    img{
        margin: 10px;
    }
    .bp-h-right-con{
        padding: 20px;
      
    }
              
    sup{
        font-size: 10px;
        padding:  1px 4px;
        border-radius: 50%;
        background-color: blueviolet;
        color:#fff;
    }
     

`