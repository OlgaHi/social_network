import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   
    let dialogs = [
        {id: 1, name: 'Mikhail'}, 
        {id: 2, name: 'Daniel'},
        {id: 3, name: 'Era'},
        {id: 4, name: 'Kristina'},
        {id: 5, name: 'Aleksa'},
        {id: 6, name: 'Sandra'}
    ] 

    let messages = [
        {id: 1, message: 'Hi!'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Today is nice day!'},
        {id: 4, message: 'Love coding'},
        {id: 5, message: 'React is the best'},
        {id: 6, message: 'Spain'}
    ] 


    let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);


    let messagesElements = messages
    .map( m => <Message message={m.message} id={m.id}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    
    )
}

export default Dialogs;