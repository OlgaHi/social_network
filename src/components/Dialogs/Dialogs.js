import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                   <NavLink to="/dialogs/1">Mikhail</NavLink>
                </div>
                <div className={s.dialog}>
                   Daniel
                </div>
                <div className={s.dialog}>
                   Era
                </div>
                <div className={s.dialog}>
                   Kristina
                </div>
                <div className={s.dialog}>
                   Aleksa
                </div>
                <div className={s.dialog}>
                   Sandra
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi are you?</div>
                <div className={s.message}>Nice day!</div>
            </div>
        </div>
    
    )
}

export default Dialogs;