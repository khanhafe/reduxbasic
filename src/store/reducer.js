const initialState = {
  posts: [],
  loginModal: {
    open: false
  },
  mydata: "test data"
};

const reducer = (state = initialState, action) => {
  // if (action.type === "ADD_POST") {
  //   state.posts.push(action.payload);
  // }

  return state;
};

export default reducer;
