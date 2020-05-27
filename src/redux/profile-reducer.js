const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Best job ever!', likesCount: 12}, 
    {id: 2, message: 'How can we help people', likesCount: 5},
    {id: 3, message: 'Today is nice day!', likesCount: 2}
],
newPostText: ''
};

const profileReducer = (state = initialState,action) => {

    switch(action.type) {
        case ADD_POST: {
          let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
          };
          return {
            ...state,
            posts: [...state.posts, newPost],
          //stateCopy.posts = [...state.posts];
          //stateCopy.posts.push(newPost);
            newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
            ...state,
           newPostText: action.newText
          }
          
        }
        default:
          return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;