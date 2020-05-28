const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, photoUrl:'https://img.icons8.com/bubbles/2x/girl-with-compass.png', followed: false, fullName: 'Amanda', status: 'I am happy', location: {city: 'Alicante', country: 'Spain'}}, 
    {id: 2, photoUrl:'https://img.icons8.com/bubbles/2x/user.png', followed: true, fullName: 'Jack', status: 'Looking for a job', location: {city: 'Seattle', country: 'USA'}}, 
    {id: 3, photoUrl:'https://comandoestrategico.com/wp-content/uploads/2019/04/administrator-male.png', followed: false, fullName: 'Adam', status: 'React React', location: {city: 'Milan', country: 'Italy'}}
]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
          return {
            ...state,
            users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: true} 
              }
              return u;
            })
          }
        case UNFOLLOW:
          return {
            ...state,
            users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: false}
              }
              return u;
            })
          }
          case SET_USERS: {
            return {
             ...state,
             users: [...state.users, ...action.users] //skleili dva masivakotoriy bil i noviy prishel
            }
          }
        default:
          return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;