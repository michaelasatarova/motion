import styled from "styled-components";

export const FriendsStyle = styled.section`
.friend-col{
    width:400px;
    display:flex;
    flex-direction:column;
    margin:10px;
    padding:26px;
    align-items:center;
    background-color:#fff;
    box-shadow: 7px 3px 15px -4px rgba(0,0,0,0.75);
    img{
        width:50px;
        height:50px;
    }
    p{
        text-align:center;
    }
    h1{
        margin-bottom:2px;
    }
    h5{
        margin-top:0;
    }
    .btn-group{
        display:flex;
       button{
           width:150px;
        padding:10px 20px;
        margin:10px;
        border-radius: 20px;
        border: 1px solid gray;
        background: #fff;
        cursor: pointer;
       }
    }
}





.friend-I-like{
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
}
`