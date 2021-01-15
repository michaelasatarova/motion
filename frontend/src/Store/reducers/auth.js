const initialState = {
  token: null,
  posts: [],
  friends:[],
  userAccount: null,
  userPosts:[],
};

export const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "USER_LOGIN": {
      const token = action.payload;
      return { ...state, token };
    }
    case "GET_POSTS":{
      const posts = action.payload;
      return { ...state, posts };
    }
    case "GET_FRIENDS":{
      const friends = action.payload;
      return { ...state, friends };
    }
    case "USER_ACCOUNT":{
      const userAccount = action.payload;
      return { ...state, userAccount };
    }
    case "USER_POSTS":{
      const userPosts = action.payload;
      return { ...state, userPosts };
    }
    default:
      return state;
  }
};
