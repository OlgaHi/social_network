import React from 'react';
//import s from './Friends.module.css';
import FriendItem from './Friend/FriendItem';
//import { showFriendsCreator } from '../../../redux/sidebar-reducer';

const Friends = (props) => {
  
  let state = props.sidebar;

  let friendsElement = state.friends.map(f => <FriendItem name={f.name} id={f.id} />);
   

  let onShowFriends = () => {
    props.showFrinds();
    }


    return (
      <div>
        <h1 onLoad={onShowFriends}>Friends</h1>
        {friendsElement}
    </div>
    )
}

export default Friends;