import styled from "styled-components";

export const PostStyle = styled.section`
display:flex;
flex-wrap:wrap;
padding:10px;
background-color: #F2F2F2;
justify-content: center;


.postWrap{
    width:80%;
    display: flex;
    flex-wrap:wrap;
    justify-content: left;

}
@media (max-width: 1520px) {
    .postWrap{
        width:100%;
    }
  }

`