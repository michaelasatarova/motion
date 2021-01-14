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
      .i{
        cursor: pointer;
      }
    }
              
    sup{
        font-size: 10px;
        padding:  1px 4px;
        border-radius: 50%;
        background-color: blueviolet;
        color:#fff;
    }
     
.toggle-menu-btn{
    width:150px;
    position:absolute;
    top:80px;
    background-color:#fff;
    margin-right:5px;
    //padding:5px 20px;
    .profile-menu-nav, .btn-menu-nav{
        display:flex;
        flex-direction:row;
        align-items:baseline;
        cursor: pointer;
        p{
            margin-left:10px;
            padding:5px 20px;
            margin:5px;
        }
        .i{
            padding:5px 10px; 
        }
        &:hover{
            background-color:#F2F2F2
        }
    }
}

.toggle-notification-btn{
    width:250px;
    position:absolute;
    top:80px;
    background-color:#fff;
    margin-right:105px; 
    h1{
        font-size:17px;
        text-align:center;
    }
    .received-requests{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .received-from-user{
            display:flex;        
            .received-from-user-data{
                h2{
                    font-size:15px;
                    font-weight:600;
                    margin-bottom:3px;
                }
                h3{
                    font-size:10px;
                    font-weight:300;
                    margin-top:3px;
                }
            }
            img{
                width:50px;
                height:50px;
                border-radius:50%;
            }
        }
        .accept-or-deny{
            padding:10px;
            .checkCircle{
                color:blueviolet;
                margin-right:15px;
            }
        }
    }
}

    @media (max-width: 700px) {
        .bp-h-left{
            width:100%;
        }
  }
`