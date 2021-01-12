import styled from "styled-components";


export const EditProfileStyle = styled.section`
margin:auto;

.profile{
    width:1100px;
    display:flex;
    margin: 0 auto;
    justify-content:center;
    background-color: #fff;
    box-shadow: 7px 3px 15px -4px rgba(0,0,0,0.75);
    position:relative;
    top:-100px;
    z-index:5;
}
.profile-data{
    display:flex;
    flex-direction:column;
    padding:10px;
    margin:10px;
}
.profile-person{
    min-width: 230px;
    padding: 30px;
    text-align: center;
    border-right: 3px solid #bcb7b79c;
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        width:100px;
        height:100px;
    }
    button{
        padding:10px 40px;
        margin:10px;
        margin-top:50px;
        border-radius: 20px;
        border: 1px solid gray;
        background: #fff;
        cursor: pointer;
    }
    .btn-GP{
        margin-top:100%;
        button{
        margin-top:0;
        } 
        button:nth-last-child(1){
            background:linear-gradient(115deg, #c568ff 0%, #6e91f6);
            opacity:1;
            color:#fff;
        } 
    }
}

.ea-I-like{
    width:100%;
    h5{
        font-style:12px;
        font-weight:400;
    }
    .groupOfTags{
        display:flex;
        flex-wrap:wrap;

        .tag{
            padding:10px;
            background:#F2F2F2;
            border-radius: 20px;
            margin: 10px;

            strong{
                cursor:pointer;
                margin-left:10px;
            }
        }
    }
    .form-group{
        display:flex;
        width:87%;
        padding:1%;
        margin:1%;
        margin-right:3%;
        border-bottom:3px solid #bdb9b9;
            input{
            width:100%;
            padding: 8px;
            margin: 4px;
            border-width: 0px;
            background: transparent;
            &:active, &:focus{
                outline: none;
            }
        } 
        button{
            padding: 10px 40px;
            margin: 10px;
            margin-top: 50px;
            border-radius: 20px;
            border: 1px solid gray;
            background: #fff;
            cursor: pointer;
             }  
    }
}

.personal-info-edit{
    display:flex;
    flex-wrap:wrap;
    .form-group{
        display:flex;
        flex-direction:column;
        width:40%;
        padding:1%;
        margin:1%;
        margin-right:3%;
        border-bottom:3px solid #bdb9b9;

        label{
            color:#827e7e;
            font-size:10px;
            font-weight:800;
        }
        input, textarea{
            padding: 8px;
            margin: 4px;
            border-width: 0px;
            background: transparent;
            &:active, &:focus{
                outline: none;
            }
        }
    }
    
}

`