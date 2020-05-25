import React from 'react';
//import s from './Friends.module.css';
import { showFriendsCreator } from '../../../redux/sidebar-reducer';
import Friends from './Friends';
import StoreContext from '../../../StoreContext';

const FriendsContainer = (props) => {
  
  return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().sidebar;
  
            let onShowFriends = () => {
              store.dispatch(showFriendsCreator());
              }
              return (
                <Friends sidebar={state} showFriends={onShowFriends} />
              )
        }
        }
    </StoreContext.Consumer>
  
}


export default FriendsContainer;

