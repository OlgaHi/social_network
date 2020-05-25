import React from 'react';
import s from './FriendItem.module.css';


const FriendItem = (props) => {

   return (
      <div>
         <div className={s.item}>
            <img src='https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg' />
         </div>
         {props.name}
      </div>
   )
}

export default FriendItem;