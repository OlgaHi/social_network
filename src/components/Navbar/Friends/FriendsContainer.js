//import s from './Friends.module.css';
import { showFriendsCreator } from '../../../redux/sidebar-reducer';
import Friends from './Friends';
//import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

/* const FriendsContainer = (props) => {
  
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
 */
const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showFriends: () => {
    dispatch(showFriendsCreator());
    }

  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends); 

export default FriendsContainer;

