import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    
  let posts = [
    {id: 1, message: 'Hi!', likesCount: 12}, 
    {id: 2, message: 'How are you?', likesCount: 5},
    {id: 3, message: 'Today is nice day!', likesCount: 2},
    {id: 4, message: 'Love coding', likesCount: 7},
    {id: 5, message: 'React is the best', likesCount: 3},
    {id: 6, message: 'Spain', likesCount: 9}
] 
  
  let postsElements = posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)


    return (
        <div class={s.postsBlock}>
         <h3>My posts</h3>  
           <div>
             <div>
               <textarea></textarea>
             </div>
             <div>
               <button>Add post</button> 
             </div>
            </div>
         <div className={s.posts}>
         {postsElements} 
         </div>
        </div>
      
    )
}

export default MyPosts;