import styled from "styled-components";


export const BlogPostGalleryStyle = styled.section`

.gallery-bp-user-data{
    display:flex;
    img{
        width:40px;
        height:40px;
        margin:15px;
    }
}
.gallery-bp-post-gallery{
    text-align:center;
}

.gbps{
    padding:10px;
    margin: 10px;
    background-color:#fff;
}

.bp-like-and-share{
          display: flex;
          flex-direction: row;
          padding: 30px ;
          text-align: center;
          background-color:#fff;
          p{
              justify-content: flex-end;
          }     
          .bp-like, .bp-share{
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

`