const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

  _state: {
    profilePage: {
        posts: [
            {id: 1, message: 'Best job ever!', likesCount: 12}, 
            {id: 2, message: 'How can we help people', likesCount: 5},
            {id: 3, message: 'Today is nice day!', likesCount: 2}
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Mikhail'}, 
            {id: 2, name: 'Daniel'},
            {id: 3, name: 'Era'},
            {id: 4, name: 'Kristina'},
            {id: 5, name: 'Aleksa'},
            {id: 6, name: 'Sandra'}
          ],
        messages: [
            {id: 1, message: 'Hi!'}, 
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you doing?'},
            {id: 4, message: 'How is your coding?'},
            {id: 5, message: 'Do you like React?'},
            {id: 6, message: 'Have you been in Spain?'}
          ] 
         },

        sidebar: [
            {id: 1, name: 'Daniel'},
            {id: 2, name: 'Mikhail'},
            {id: 3, name: 'Olga'}
        ]   
  },
  _callSubscriber() {
    console.log ('State updated')
    },

  subsribe (observer) { 
    this._callSubscriber = observer;
  },
  getState() {
   return this._state;
  },

  dispatch(action) {
   if (action.type === ADD_POST) {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);  
   } else if (action.type === UPDATE_NEW_POST_TEXT) {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
   }
  }
  
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;
window.store=store;