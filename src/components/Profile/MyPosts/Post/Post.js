import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return(
        <div className={s.item}>
        <img src='https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg'/>
           {props.message}
           <div>
               <span>like</span>  {props.likesCount}
           </div>
         </div>

    )
}

export default Post;