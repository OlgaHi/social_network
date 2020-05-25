import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState().dialogsPage;

                let onsendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs dialogsPage={state}
                    sendMessage={onsendMessageClick}
                    updateNewMessageBody={onNewMessageChange} />
            }
            }
        </StoreContext.Consumer>
    
}

export default DialogsContainer;