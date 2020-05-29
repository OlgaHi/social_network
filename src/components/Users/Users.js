import React from 'react';
import s from './Users.module.css';


let Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl:'https://img.icons8.com/bubbles/2x/girl-with-compass.png', followed: false, fullName: 'Amanda', status: 'I am happy', location: {city: 'Alicante', country: 'Spain'}}, 
            {id: 2, photoUrl:'https://img.icons8.com/bubbles/2x/user.png', followed: true, fullName: 'Jack', status: 'Looking for a job', location: {city: 'Seattle', country: 'USA'}}, 
            {id: 3, photoUrl:'https://comandoestrategico.com/wp-content/uploads/2019/04/administrator-male.png', followed: false, fullName: 'Adam', status: 'React React', location: {city: 'Milan', country: 'Italy'}}
        ])
    }

    

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt='' src={u.photoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={ () => { props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;