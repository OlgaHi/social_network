import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div>
        <div>
        <img src='https://www.newcybersource.com/wp-content/uploads/2018/05/network-solutions-subheader.jpg'/>
         </div>
        <div>
          ava + description
        </div>
        <MyPosts/>
      </div>
        
    )
}

export default Profile;