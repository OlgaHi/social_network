 

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Best job ever!', likesCount: 12}, 
            {id: 2, message: 'How can we help people', likesCount: 5},
            {id: 3, message: 'Today is nice day!', likesCount: 2}
        ]
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
    }
}

export default state;