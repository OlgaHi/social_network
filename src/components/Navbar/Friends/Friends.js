import React from 'react';
import s from './Friends.module.css';
import FriendItem from './Friend/FriendItem';

const Friends = (props) => {
  

  let friendsElement = props.sidebar
  .map(f => <FriendItem name={f.name} id={f.id} />);

    return (
      <div>
        <h1>Friends</h1>
        <p>{friendsElement}</p>
    </div>
    )
}

export default Friends;