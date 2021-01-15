import styled from "styled-components";


export const ProfileStyled = styled.section`
margin:auto;

a{
    color:#323232;
    text-decoration:none;
}

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
    
}
.profile-person{
    min-width: 230px;
    padding: 30px;
    text-align: center;
    border-right: 3px solid #bcb7b79c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width:50px;
        height:50px;
        border-radius:50px;
    }
    h1, h2{
        font-weight: 400;     
    }
    h2{
        font-size: 12px;     
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
}

.pd1{
    display:flex;
    padding:10px;  
    padding-left:30px;
}

.profile-about{
    width:400px; 
    padding-right:20px;
    margin-right:20px;

    h5{
        font-style:12px;
        font-weight:400;
    }

    .profile-contact-data{
        display:flex;
        justify-content: space-between;

        .profile-contact{
            margin:0;

                h5, p{
                margin:0;
            }
        }
    }
}

.I-like{
    max-width:350px;
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
        }
    }
}


.pd2{
    display:flex;
    justify-content:space-around;
    border-top: 3px solid #bcb7b79c;
    .pd2-col{
        text-align:center;
        h1{
            margin-bottom:5px;
        }
        h3{
            margin-top:0;
            font-weight:400;
        }
    }
}

.active-link{
    border-bottom: 5px solid purple;
}


` 