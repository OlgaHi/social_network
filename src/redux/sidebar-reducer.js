const SHOW_FRIEND = 'SHOW-FRIEND'

let initialState = {
  friends: [
            {id: 1, name: 'Daniel'},
            {id: 2, name: 'Mikhail'},
            {id: 3, name: 'Olga'}
        ]   
};

const sidebarReducer = (state = initialState,action) => {
    switch (action.type) {
        case SHOW_FRIEND:
        return {
            ...state,
            sidebar: {...state.sidebar}
        } 

    default:
    return state;
    }
}
export const showFriendsCreator = () => ({type: SHOW_FRIEND})

export default sidebarReducer;