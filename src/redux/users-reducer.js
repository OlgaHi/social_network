const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {id: 1, followed: false, fullName: 'Amanda', status: 'I am happy', location: {city: 'Alicante', country: 'Spain'}}, 
    {id: 2, followed: true, fullName: 'Jack', status: 'Looking for a job', location: {city: 'Seattle', country: 'USA'}}, 
    {id: 3, followed: false, fullName: 'Adam', status: 'React React', location: {city: 'Milan', country: 'Italy'}}
]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
          return {
            ...state,
            users: [...state.users]
          }
        case UNFOLLOW:
          return {
            
          }

        default:
          return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


export default usersReducer;