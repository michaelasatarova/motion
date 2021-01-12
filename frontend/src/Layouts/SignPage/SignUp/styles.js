import styled from "styled-components";

export const SectionStyled = styled.section`
width :60%;

.right {
    width: 90%;
    height: 100vh;  
    display: flex;
    flex-direction: column;  
   }  

   .header{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 40px;
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
    }

    main{
        align-items: center;
        width: 50%;
        height: 40%;
        margin: 50px auto;
    }

    h1{
        font-size: 40px;
        font-weight: 400;
        text-align: center;
    }
    .name{
        margin-top: 50px;
    }
    .name, .password{
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #323232;
    }

    .i{
        padding-top:12px ;
        color: black;
        margin:5px;
    }

   input{
    padding: 8px;
    margin: 4px;
    border-width: 0px;
    background: transparent;
    &:active, &:focus{
        outline: none;
        }
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

