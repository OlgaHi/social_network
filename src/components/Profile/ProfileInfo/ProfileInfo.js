import React from 'react';
import s from'./ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div>
        <img src='https://www.newcybersource.com/wp-content/uploads/2018/05/network-solutions-subheader.jpg'/>
         </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
        
    )
}

export default ProfileInfo;