import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return(
        <div className={s.item}>
        <img src='https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg'/>
           post 1
           <div>
               <span>like</span>
           </div>
         </div>

    )
}

export default Post;