import styled from "styled-components";


export const PostStyled = styled.section`

    background-color: #F2F2F2;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
 
 

    .bp-main-header{
        width: 100%;
        height: 10%;
        display: flex;
        border-bottom: 1px solid #3232322b;
        align-items: center;
        
    }

    .searching{
        width: 70%;
        .search-box{
            width: 60%;
            margin:auto;
            input{
                padding: 8px;
                margin: 4px;
                border:0;
                background: transparent;
                &:active, &:focus{
                    outline: none;
                    }
                } 
        }
    }

.link{
    padding-right: 20px;
    color:#3232329e;
    
}

.link:hover{
    border-bottom:1px solid blueviolet;
}

a{
    text-decoration:none;
}
.user-data img{
    height:43px;
    margin-top:15px;
}
.send-btn{
    width: 40%;
    display:flex;
    justify-content:flex-end;
}


    .bp-main-search-links{
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        link{
            padding: 15px;
            
            h3{
                font-weight: 400;
                padding-bottom: 7px;
                &:hover, &:focus, &:active{
                border-bottom: 2px solid #323232;
                } 
            } 
        }
    }

 /*MAIN POSTS*/

.bp-post-section{
    margin: 2% 5%;
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start; */

    
    .bp-posts, .user-post {
        width: 48%;
        background-color: #fff;
        margin: 1%;
        box-sizing: border-box;
        /* flex: 1 auto; */
        float:left;
        display: block;
    }
    .user-post:nth-child(2n +0){
        float: right;
    }

    .bp-posts{
        height: 120px;
        display: flex;
        align-items: center;
        img{
            padding: 0 30px;
        }
        .btn{
            img{
                padding: 0 10px;
            }
        }
        .fa-2x{
            display: none;
        }
        input{
            padding: 8px;
            margin: 4px;
            border:0;
            background: transparent;
            width: 380px;
            &:active, &:focus{
                outline: none;
                }
            }    
        }

    .user-post{
      align-items: flex-start; 
      .user-data{
          padding: 26px 30px;
          display: flex;
          flex-direction: row;
        .fa-user-circle{
            width: 46px;
        }
        .bp-user-name{
            padding-left: 10px;
            text-align: left;
            p{
                padding: 0;
            }
        }
      }
      p{
          padding: 0 30px;
          text-align: left;
      }
      .post-gallery{
          margin: 10px;
          text-align:center;
            img{
                width: 300px;
                height: 200px;
            }
        }
        .shared-post{
            display: flex;
            flex-direction: row;
            .user-post{
                display: flex;
                flex-direction: column;
                width: 100%;
                .user-data{
                    img{
                        width: 33%;
                        padding: 0 10px;
                    }
                }
                img{
                    padding: 15px 30px;
                    width: 80%;
                }
            }
        }
      .like-and-share{
          display: flex;
          flex-direction: row;
          padding: 30px ;
          text-align: center;
          background-color:#fff;
          p{
              justify-content: flex-end;
          }     
          .like, .share{
            display: flex;
            flex-direction: row;
            padding-right: 15px;        
            .i{
                opacity: 0.5;
                margin-top:20px;
            }
            p{
                padding: 0 10px;
            }
          }
      }
    }
  
    .nw{ 
       
        background-color: #fff;        
    }

}

hr{
    margin: 20px 0px 0px 30px;
}

@media only screen and (max-width: 1000px) {
    .bp-post-section{     
        flex-direction: column;
        .bp-posts, .user-post {
        width: 80%;
        margin: 1% auto;
        }
       .bp-posts, .user-post{
        float:none;
    }
    .user-post:nth-child(2n +0){
        float: none;
    }
    }
}

@media only screen and (max-width: 658px){
    .bp-h-left-con{
        h2, h3{
            display: none;
        }
    }
    .bp-main-header{
        flex-direction: column;
        .searching, .search-box{
            width: 100%; 
            padding: 10px 20px;         
        }
    }

    .bp-post-section{     
        .bp-posts, .user-post {
        width: 100%;
        }
        .fa-4x{
            display: none;
        }
    }
    .blog-post-header{
        flex-direction:column;
    }
    .bp-h-left, .bp-h-right{
        width:100%;
    }
}
`