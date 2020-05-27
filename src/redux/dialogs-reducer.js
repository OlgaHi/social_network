const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
      ],
      newMessageBody: ""
}

const dialogsReducer = (state=initialState,action) => {
    
     switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {       //sozdaem i vozvrashaem noviy object
                 ...state,
                 newMessageBody: action.body
             }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            };
        default: 
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;