import styled from "styled-components";
import Bg from "../assets/background_image.png"

export const StyledMotion = styled.section`
width :40%;
color:#fff;
text-align:center;

.left {  
    width:100%;   
    height: 100%;
    background-image: url(${Bg}), linear-gradient(115deg, #c568ff 0%, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
     
    
}

header {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    // min-height: 206px;
    }

    img {
        margin-bottom: 3%;
    }

    h1 {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 3%;
    }

    .idea p{
        line-height:  24px;  
        font-weight: 300;
        width: 35%;  
        margin: auto;
        
    } 

    .download-btns{
        display: flex;
        justify-content: center;
        a{
            border:none;
        }
    }

    button{
        border-radius: 20px;
        border: rgba(255, 255, 255, 0.156) 3px solid;
        background-color: rgba(255, 255, 255, 0);
        color: #fff;
        padding: 5px;
        width: 126px;
        margin: 40px 5px;
    }
    
    .i{
        margin-right: 5px;
     }

     .social-ico{
         border-radius: 50%;
         background-color: #efbdff33;
         padding: 10px;
         margin:10px;
     }

     footer {   
        margin-top: 220px;
     }

     .icons{
        padding: 20px;
     } 
    
     /* a{
        margin: 10px;   
        padding: 5px;                
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: blue($color: #d133dc44);
     } */

    i{
        padding: 3px;
    }

    
`