import styled from "styled-components";

export const SectionStyled = styled.section`
width :60%;

.right {
    width: 90%;
    height: 100vh;  
    display: flex;
    flex-direction: column;  
    justify-content:center;
   }  


    button{
        border-radius: $border-radius-100;
        padding: 5px;
        opacity: 0.5;
        border: 1px solid #000000;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
        width: 120px;
        border-radius: 22px;
         height: 50px;
    }
    .signup{
        width: 250px;
        margin: 0 auto;
        color: #fff;
        background: linear-gradient(115deg, #c568ff 0%, #6e91f6);
        opacity: 1;
        border:none;
    }

    p {
        padding: 7px;
        margin-top:5px;
        width:300px;
        margin:auto;
    }

    main{
        align-items: center;
        width: 50%;
        height: 40%;
        margin: 50px auto;
        text-align:center;
    }

    h1{
        font-size: 40px;
        font-weight: 400;
        text-align: center;
    }
    .name{
        margin-top: 50px;
    }
  

    .i{
        padding-top:12px ;
        color: black;
        margin:5px;
    } 
    .done{
        color:blueviolet;
    }

    .progress-dots{
        margin: 30px auto;
    }

`;

export const StyleRow = styled.section`
    display: flex;
    width : 100vw;
    height: 100vh;

`;
